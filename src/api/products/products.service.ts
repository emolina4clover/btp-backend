import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrestashopProductsClient } from '../../lib/microservices/uses-cases/prestashop-products.client';
import { PrestaShopProductsInterface } from '../interface/prestashop-products.interface';
import { PrestaShopProductsDetailsInterface } from '../interface/prestashop-products-detail.interface';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);

  constructor(private prestashopProductsClient: PrestashopProductsClient) {}

  async getProducts() {
    const prestashopProducts =
      await this.prestashopProductsClient._handleCallPrestashopProducts();

    if (prestashopProducts.status === 460) {
      this.logger.error(prestashopProducts.data?.message);
      throw new NotFoundException('Error connection');
    }

    const productsByIdMaps = this.getProductMap(prestashopProducts.data);

    const productsDetails: PrestaShopProductsDetailsInterface[] = [];

    for (const id of productsByIdMaps) {
      const details =
        await this.prestashopProductsClient._handleCallPrestashopProductsById(
          id,
        );

      if (details.status === 460) {
        this.logger.error(details.data?.message);
      } else {
        productsDetails.push(details.data);
      }
    }

    this.logger.debug('Detalles de productos obtenidos.');

    return productsDetails;
  }

  /**
   * Extracts and maps product IDs from a PrestaShop product interface.
   *
   * @param {PrestaShopProductsInterface} products - An object conforming to the PrestaShopProductsInterface, which contains product data.
   */
  private getProductMap(products: PrestaShopProductsInterface) {
    if (!products.prestashop.products?.length) {
      this.logger.error('No products found');
      throw new NotFoundException('No products found');
    }

    return products.prestashop.products[0].product.map((p) => p.$.id);
  }
}
