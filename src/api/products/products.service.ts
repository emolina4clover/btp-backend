import { Injectable, Logger } from '@nestjs/common';
@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);
}
