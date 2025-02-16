import {
  Controller,
  Get,
  InternalServerErrorException,
  Logger,
  Param,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  private readonly logger = new Logger(ProductsController.name);

  constructor(private readonly productService: ProductsService) {}

  @Get()
  async getProducts() {
    return this.productService.getProducts();
  }

  @Get('images/:productId')
  async getProductsImages(@Param('productId') productId: string) {
    return this.productService.getProductsImages(productId);
  }

  @Get(':productId')
  async getProductsById(@Param('productId') productId: string) {
    return this.productService.getProductsById(productId);
  }

  @Get('categories')
  async getProductsCategories() {
    return this.productService.getProductsCategories();
  }

  @Get('feature/:combinationId')
  async getProductsFeature(@Param('combinationId') combinationId: string) {
    if (!combinationId) {
      throw new InternalServerErrorException('Error combination');
    }

    return this.productService.getProductsFeature(combinationId);
  }
}
