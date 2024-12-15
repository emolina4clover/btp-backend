import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrestashopProductsClient } from '../../lib/microservices/uses-cases/prestashop-products.client';
import { PrestaShopProductsInterface } from '../interface/prestashop-products.interface';
import { PrestaShopProductsDetailsInterface } from '../interface/prestashop-products-detail.interface';
import { transformData } from '../../utils/transform-data-products';
import {
  PrestashopProductsStockInterface,
  PrestashopProductsStockResponseInterface,
} from '../interface/prestashop-products-stock.interface';
import { Public } from '../../guards/public.guard';
import { ConfigService } from '@nestjs/config';
import { PrestashopResourcesClient } from '../../lib/microservices/uses-cases/prestashop-resources.client';
import {
  ApiResources,
  PrestashopResourcesResponse,
} from '../interface/prestashop-resources-response.interface';

@Injectable()
export class ResourcesService {
  private readonly logger = new Logger(ResourcesService.name);

  constructor(private prestashopResourcesClient: PrestashopResourcesClient) {}

  /**
   * Fetches resources using the PrestaShop resource client.
   */
  async getResources() {
    const resource =
      await this.prestashopResourcesClient._handleCallPrestashopResources();

    if (resource.status === 460) {
      this.logger.error(resource.data?.message);
      throw new NotFoundException('Error connection');
    }

    return this.mapAPIData(resource.data.prestashop.api);
  }

  /**
   * Maps and processes API data from a PrestashopResourcesResponse into a structured format.
   */
  private mapAPIData(apiData: ApiResources[]) {
    const shop = apiData[0]?.$?.shopName || 'Unknown Shop';
    const resources = [];

    Object.keys(apiData[0]).forEach((key) => {
      if (key === '$') return; // Ignorar la metadata base

      const resourceList = apiData[0][key]; // Todas las entradas bajo resources
      resourceList.forEach((resource) => {
        const url = resource.$['xlink:href'];
        const methods = {
          get: resource.$.get === 'true',
          put: resource.$.put === 'true',
          post: resource.$.post === 'true',
          patch: resource.$.patch === 'true',
          delete: resource.$.delete === 'true',
          head: resource.$.head === 'true',
        };
        const description =
          resource.description?.[0]?._.trim() || 'No description provided';

        const schema = (resource.schema || []).map((s) => ({
          type: s.$.type,
          url: s.$['xlink:href'],
        }));

        resources.push({
          name: key,
          url,
          methods,
          description,
          schema,
        });
      });
    });

    return { shop, resources };
  }
}
