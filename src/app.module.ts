import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// Importa tus módulos
import { ExternalApiModule } from './modules/data-sources/external-api/external-api.module';
import { TransformationsModule } from './modules/data-transformations/transformations.module';
import { PrestaShopBusinessRulesModule } from './modules/business-rules/prestashop-business-rules.module';
import { ApiController } from './modules/api/controllers/api.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ExternalApiModule,
    TransformationsModule,
    PrestaShopBusinessRulesModule,
  ],
  controllers: [
    ApiController,
  ],
})
export class AppModule {}
