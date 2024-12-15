import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema()
export class CartItem {
  @Prop({ type: String, required: true })
  productId: string;

  @Prop({ required: true, min: 1 })
  quantity: number;

  @Prop({ required: true })
  price: number;

  @Prop({
    type: Number,
    default: function () {
      return this.quantity * this.price;
    },
  })
  total: number;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);
