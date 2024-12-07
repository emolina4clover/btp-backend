import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { MicroservicesModule } from '../../lib/microservices/microservices.module';
import { ProductsService } from './products.service';

@Module({
  imports: [MicroservicesModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
