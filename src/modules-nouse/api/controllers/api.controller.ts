import { Controller, Get } from '@nestjs/common';
import { ExternalApiService } from '../../data-sources/external-api/external-api.service';
import { TransformationsService } from '../../data-transformations/transformations.service';
import { PrestaShopBusinessRulesService } from '../../business-rules/prestashop-business-rules.service';

@Controller('api')
export class ApiController {
  constructor(
    private readonly externalApiService: ExternalApiService,
    private readonly transformationsService: TransformationsService,
    private readonly prestaShopBusinessRulesService: PrestaShopBusinessRulesService,
  ) {}

  @Get('resources')
  async getResources() {
    return await this.externalApiService.getResources();
  }

  @Get('products')
  async getProducts() {
    let products = await this.externalApiService.getProducts();
    products = await this.transformationsService.transformData(products);

    console.log(products);
    products =
      this.prestaShopBusinessRulesService.applyPrestaShopBusinessRules(
        products,
      );
    return products;
  }
}
