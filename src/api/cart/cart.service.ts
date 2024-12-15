import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';
import { Model, Types } from 'mongoose';
import { CreateCartDto } from './dto/create-cart-item.dto';
import { UpdateCartDto, UpdateCartItemDto } from './dto/update-cart-item.dto';

@Injectable()
export class CartService {
  private readonly logger = new Logger(CartService.name);

  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

  /**
   * Creates a new shopping cart for the specified user with the provided items.
   *
   * @param {string} userId - The ID of the user for whom the cart is being created.
   * @param {CreateCartDto} createCartDto - The data transfer object containing cart details such as items.
   * @return {Promise<Cart>} A promise that resolves to the newly created cart.
   */
  async createCart(
    userId: string,
    createCartDto: CreateCartDto,
  ): Promise<Cart> {
    const { items } = createCartDto;

    const cart = new this.cartModel({
      userId,
      items,
      status: 'active',
    });

    return cart.save();
  }

  /**
   * Retrieves the active shopping cart for a specific user.
   */
  async showCart(userId: string): Promise<Cart> {
    const cart = await this.cartModel.findOne({
      userId,
      status: 'active',
    });

    if (!cart) {
      throw new Error('Carrito no encontrado.');
    }

    return cart;
  }

  /**
   * Updates the items and status of an existing cart based on the provided data.
   *
   * @param {string} cartId - The unique identifier of the cart to update.
   * @param {UpdateCartDto} updateCartDto - The data transfer object containing the updates to apply to the cart.
   */
  async updateCart(
    cartId: Types.ObjectId,
    updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    const { items, status } = updateCartDto;

    // Buscar el carrito activo del usuario
    const cart = await this.cartModel.findOne({
      _id: cartId,
      status: 'active',
    });

    if (!cart) {
      throw new Error('Carrito no encontrado.');
    }

    // Actualizar los ítems si se incluyen en el DTO
    items.forEach((updateItem: UpdateCartItemDto) => {
      const existingItemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === updateItem.productId,
      );

      if (existingItemIndex > -1) {
        // Si el ítem ya está en el carrito, actualizar (cantidad o precio)
        const existingItem = cart.items[existingItemIndex];
        if (updateItem.quantity !== undefined) {
          existingItem.quantity = updateItem.quantity;
        }
        if (updateItem.price !== undefined) {
          existingItem.price = updateItem.price;
        }
        existingItem.total = existingItem.quantity * existingItem.price;

        // Eliminar ítem si su cantidad es 0
        if (existingItem.quantity === 0) {
          cart.items.splice(existingItemIndex, 1);
        }
      } else {
        // Si el ítem no existe, agregarlo al carrito
        cart.items.push({
          productId: updateItem.productId,
          quantity: updateItem.quantity,
          price: updateItem.price,
          total: updateItem.quantity * updateItem.price,
        });
      }
    });

    // Actualizar el estado del carrito si está incluido en el DTO
    if (status) {
      cart.status = status;
    }

    return cart.save(); // Guardar los cambios en MongoDB
  }
}
