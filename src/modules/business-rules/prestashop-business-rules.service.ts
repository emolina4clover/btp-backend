import { Injectable } from '@nestjs/common';

@Injectable()
export class PrestaShopBusinessRulesService {
  applyPrestaShopBusinessRules(products: any[]): any[] {
    return products
    //  .filter((product) => product.active === '1')
      .map((product) => {
        return product;
      });
  }
}

