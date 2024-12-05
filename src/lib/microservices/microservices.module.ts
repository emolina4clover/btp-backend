import { Module } from '@nestjs/common';
import { ConfigurationMsClient as ConfigMicroservice } from './http';
import { PrestashopProductsClient } from './uses-cases/prestashop-products.client';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ConfigMicroservice, PrestashopProductsClient],
  exports: [ConfigMicroservice, PrestashopProductsClient],
})
export class MicroservicesModule {}
