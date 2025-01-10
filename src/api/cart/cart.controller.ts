import {
  Controller,
  Post,
  Body,
  Req,
  BadRequestException,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart-item.dto';
import { UpdateCartDto } from './dto/update-cart-item.dto';
import { Types } from 'mongoose';
import { ParseObjectIdValidPipe } from '../../pipe/parse-objectId-valid.pipe';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async createCart(@Req() req: any, @Body() body: CreateCartDto) {
    if (!body.items.length) {
      throw new BadRequestException('Debe enviar al menos un item');
    }

    const userId = req.user.id;
    return this.cartService.createCart(userId, body);
  }

  @Patch('/:cartId')
  async updateCart(
    @Param('cartId', ParseObjectIdValidPipe) cartId: Types.ObjectId,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    if (!updateCartDto.items.length) {
      throw new BadRequestException('Debe enviar al menos un item');
    }

    return this.cartService.updateCart(cartId, updateCartDto);
  }

  @Patch('/show/user')
  async getCart(@Req() req: any) {
    const userId = req.user.id;
    return this.cartService.showCart(userId);
  }

  @Delete(':cartId')
  async deleteCart(
    @Param('cartId', ParseObjectIdValidPipe) cartId: Types.ObjectId,
  ) {
    return this.cartService.deleteCart(cartId);
  }

  @Delete(':cartId/products/:productId')
  async removeProduct(
    @Param('cartId') cartId: string,
    @Param('productId') productId: string,
  ) {
    return this.cartService.removeProductFromCart(
      new Types.ObjectId(cartId),
      productId,
    );
  }
}
