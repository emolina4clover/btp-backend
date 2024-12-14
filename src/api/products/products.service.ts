import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrestashopProductsClient } from '../../lib/microservices/uses-cases/prestashop-products.client';
import { PrestaShopProductsInterface } from '../interface/prestashop-products.interface';
import { PrestaShopProductsDetailsInterface } from '../interface/prestashop-products-detail.interface';
import { transformData } from '../../utils/transform-data-products';
import {
  PrestashopProductsStockInterface,
  PrestashopProductsStockResponseInterface,
} from '../interface/prestashop-products-stock.interface';
import { PrestashopCategoriesResponseInterface } from '../interface/prestashop-categories-response.interface';

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

    let productsDetailsMap: PrestashopProductsStockInterface[] =
      transformData(productsDetails);

    if (!productsDetailsMap?.length) {
      this.logger.error(
        'Error Map Data.productsDetailsMap',
        productsDetailsMap,
      );
      throw new NotFoundException('Error Map Data');
    }

    const productsDetailsMapWithStock: PrestashopProductsStockInterface[] = [];

    for (const prod of productsDetailsMap) {
      let newMap: PrestashopProductsStockInterface = { ...prod };

      const details: PrestashopProductsStockResponseInterface =
        await this.prestashopProductsClient._handleCallPrestashopProductsByStockUrlCustom(
          newMap.stockAvailable,
        );

      if (details.status !== 460) {
        newMap.stock = '0';
      }

      newMap.stock =
        details.data?.prestashop?.stock_available[0]?.quantity[0] ?? '0';

      productsDetailsMapWithStock.push(newMap);
    }

    return productsDetailsMapWithStock;
  }

  async getProductsCategories() {
    const prestashopCategories =
      await this.prestashopProductsClient._handleCallPrestashopCategories();

    if (prestashopCategories.status === 460) {
      this.logger.error(prestashopCategories.data?.message);
      throw new NotFoundException('Error connection');
    }

    const categories =
      prestashopCategories.data as PrestashopCategoriesResponseInterface;

    const categoriesByIdMaps = this.getCategoriesMap(categories);

    console.log(categoriesByIdMaps);
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

  /**
   * Retrieves a mapped array of category IDs from the given Prestashop categories response.
   *
   * @param {PrestashopCategoriesResponseInterface} categories - The Prestashop categories response object containing category data.
   * @return {string[]} An array of category IDs extracted from the Prestashop categories response.
   * @throws {NotFoundException} Throws an exception if no categories are found in the response.
   */
  private getCategoriesMap(categories: PrestashopCategoriesResponseInterface) {
    if (!categories.prestashop.categories?.length) {
      this.logger.error('No products found');
      throw new NotFoundException('No products found');
    }

    return categories.prestashop.categories[0].category.map((p) => p.$.id);
  }
}
