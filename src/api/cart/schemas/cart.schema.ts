import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { CartItem, CartItemSchema } from './cartItem.schema';
import { User } from '../../users/schemas/user.schema';

export type CartDocument = HydratedDocument<Cart>;

@Schema({ timestamps: true })
export class Cart {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  userId: Types.ObjectId;

  @Prop({ type: [CartItemSchema], default: [] })
  items: CartItem[];

  @Prop({
    type: String,
    enum: ['active', 'pending', 'completed'],
    default: 'active',
  })
  status: string;

  @Prop({ type: Number, default: 0 })
  totalQuantity: number;

  @Prop({ type: Number, default: 0 })
  subTotal: number;

  @Prop({ type: Number, default: 0 })
  total: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);

CartSchema.pre('save', function (next) {
  this.totalQuantity = this.items.reduce((acc, item) => acc + item.quantity, 0);
  this.subTotal = this.items.reduce((acc, item) => acc + item.total, 0);
  this.total = this.subTotal + this.subTotal;
  next();
});
