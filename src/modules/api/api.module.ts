import { Module } from '@nestjs/common';
import { ApiController } from './controllers/api.controller';
import { ExternalApiModule } from '../data-sources/external-api/external-api.module';
import { TransformationsModule } from '../data-transformations/transformations.module';
import { PrestaShopBusinessRulesModule } from '../business-rules/prestashop-business-rules.module';

@Module({
  imports: [
    ExternalApiModule,
    TransformationsModule,
    PrestaShopBusinessRulesModule,
  ],
  controllers: [ApiController],
})
export class ApiModule {}
