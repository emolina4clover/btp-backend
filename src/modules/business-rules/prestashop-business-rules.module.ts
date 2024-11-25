import { Module } from '@nestjs/common';
import { PrestaShopBusinessRulesService } from './prestashop-business-rules.service';

@Module({
  providers: [PrestaShopBusinessRulesService],
  exports: [PrestaShopBusinessRulesService],
})
export class PrestaShopBusinessRulesModule {}
