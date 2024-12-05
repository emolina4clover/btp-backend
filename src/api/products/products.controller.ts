import { Controller, Get, Logger } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  private readonly logger = new Logger(ProductsController.name);

  constructor() {}

  @Get()
  async getProducts() {}
}
