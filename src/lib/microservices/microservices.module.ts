import { Module } from '@nestjs/common';
import { ConfigurationMsClient as ConfigMicroservice } from './http';
import { PrestashopProductsClient } from './uses-cases/prestashop-products.client';
import { HttpModule } from '@nestjs/axios';
import { PrestashopResourcesClient } from './uses-cases/prestashop-resources.client';

@Module({
  imports: [HttpModule],
  providers: [
    ConfigMicroservice,
    PrestashopProductsClient,
    PrestashopResourcesClient,
  ],
  exports: [
    ConfigMicroservice,
    PrestashopProductsClient,
    PrestashopResourcesClient,
  ],
})
export class MicroservicesModule {}
