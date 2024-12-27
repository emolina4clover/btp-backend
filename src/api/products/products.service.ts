import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrestashopProductsClient } from '../../lib/microservices/uses-cases/prestashop-products.client';
import { PrestaShopProductsInterface } from '../interface/prestashop-products.interface';
import { PrestaShopProductsDetailsInterface } from '../interface/prestashop-products-detail.interface';
import {
  transformData,
  transformDataImages,
} from '../../utils/transform-data-products';
import {
  PrestashopProductsStockInterface,
  PrestashopProductsStockResponseInterface,
} from '../interface/prestashop-products-stock.interface';
import { PrestashopCategoriesResponseInterface } from '../interface/prestashop-categories-response.interface';
import { PrestashopCategoriesByIdResponse } from '../interface/prestashop-categores-byId-response.interface';
import { PrestaShopProductsOptionsValueInterface } from '../interface/prestashop-products-options-value.interface';
import { extractProductOptionUrls } from '../../utils/transform-data-products-options';
import { PrestaShopProductsOptionsValueOthersInterface } from '../interface/prestashop-products-options-value-others.interface';
import { PrestaShopProductsOptionsValueOptionsInterface } from '../interface/prestashop-products-options-value-options.interface';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);

  constructor(private prestashopProductsClient: PrestashopProductsClient) {}

  /**
   * Retrieves a list of products with their detailed stock information.
   *
   * This method fetches product data from an external Prestashop service, handles transformation of the product details,
   * retrieves stock availability for each product, and combines these details into a finalized product details map.
   *
   */
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

      const StockArray = [];

      for (const stock of prod.stockAvailable) {
        const details: PrestashopProductsStockResponseInterface =
          await this.prestashopProductsClient._handleCallPrestashopProductsByStockUrlCustom(
            stock.stock_available?.[0]?.$['xlink:href'],
          );

        if (details.status !== 460) {
          StockArray.push(0);
        }

        StockArray.push(
          Number(details?.data?.prestashop?.stock_available[0]?.quantity[0]),
        );

        const StockArraySum = StockArray.reduce((acc, value) => acc + value, 0);

        newMap.stock = StockArraySum ?? '0';

        delete newMap.stockAvailable;
      }

      productsDetailsMapWithStock.push(newMap);
    }

    return productsDetailsMapWithStock;
  }

  async getProductsImages(productId: string) {
    const details =
      await this.prestashopProductsClient._handleCallPrestashopProductsById(
        productId,
      );

    if (details.status === 460) {
      this.logger.error(details.data?.message);
    }

    this.logger.debug('Detalles de productos obtenidos.');

    let productsDetailsMap = transformDataImages([details.data]);

    if (!productsDetailsMap?.length) {
      this.logger.error(
        'Error Map Data.productsDetailsMap',
        productsDetailsMap,
      );
      throw new NotFoundException('Error Map Data');
    }

    return productsDetailsMap[0];
  }

  /**
   * Fetches product categories from Prestashop, processes the data to map categories by ID,
   * retrieves detailed information about each category, and returns them in a structured format.
   */
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

    const categoriesDetails = [];

    for (const category of categoriesByIdMaps) {
      const detailsCategory =
        (await this.prestashopProductsClient._handleCallPrestashopCategoryById(
          category,
        )) as PrestashopCategoriesByIdResponse;

      const categories = detailsCategory.data.prestashop.category;

      const id = categories[0].id[0];

      // Extraer el nombre de la categoría
      const name = categories[0].name[0]?.language[0]?._;

      let products = [];
      if (
        categories[0].associations &&
        categories[0].associations[0]?.products
      ) {
        products = categories[0].associations[0].products[0].product
          ? categories[0].associations[0].products[0].product?.map(
              (product) => ({
                id: product.id[0],
                url: product.$['xlink:href'],
              }),
            )
          : [];
      }

      categoriesDetails.push({
        id,
        name,
        products,
      });
    }

    return categoriesDetails;
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
   */
  private getCategoriesMap(categories: PrestashopCategoriesResponseInterface) {
    if (!categories.prestashop.categories?.length) {
      this.logger.error('No products found');
      throw new NotFoundException('No products found');
    }

    return categories.prestashop.categories[0].category.map((p) => p.$.id);
  }

  /**
   * Retrieves the product feature information for a specific product combination ID.
   *
   * This method calls external APIs to obtain product combination details, processes the data,
   * and constructs a consolidated structure of product features and associated options.
   *
   * @param {string} combinationId - The ID of the product combination for which to fetch feature details.
   */
  async getProductsFeature(combinationId: string) {
    console.log('combinationId', combinationId);

    const combinationsRequests =
      await this.prestashopProductsClient._handleCallPrestashopProductsCombinationById(
        combinationId,
      );

    if (combinationsRequests.status === 460) {
      this.logger.error(combinationsRequests.data?.message);
      throw new NotFoundException('Error connection');
    }

    const combinations =
      combinationsRequests.data as PrestaShopProductsOptionsValueInterface;

    const urlProcess = extractProductOptionUrls(combinations);

    const dataOptionsValue: any = [];

    for (const url of urlProcess) {
      const data =
        await this.prestashopProductsClient._handleCallPrestashopUrlCustom(url);

      const optionsValueData =
        data.data as PrestaShopProductsOptionsValueOthersInterface;

      const color =
        optionsValueData.prestashop.product_option_value?.[0]?.color?.[0];

      const name =
        optionsValueData.prestashop.product_option_value?.[0]?.name?.[0]
          ?.language?.[0]?._;

      const processFeatureOptionsData =
        await this.prestashopProductsClient._handleCallPrestashopUrlCustom(
          optionsValueData.prestashop.product_option_value?.[0]
            ?.id_attribute_group?.[0]?.$['xlink:href'],
        );

      let options = {};

      if (processFeatureOptionsData.status !== 460) {
        const processFeatureOptionsDataValue =
          processFeatureOptionsData.data as PrestaShopProductsOptionsValueOptionsInterface;

        const associatedOptionsUrl = [];

        for (const associatedOption of processFeatureOptionsDataValue.prestashop
          ?.product_option?.[0]?.associations?.[0]?.product_option_values?.[0]
          ?.product_option_value) {
          const urlAssociatedOption = associatedOption.$['xlink:href'];

          const data =
            await this.prestashopProductsClient._handleCallPrestashopUrlCustom(
              urlAssociatedOption,
            );

          const urlAssociatedOptionData =
            data.data as PrestaShopProductsOptionsValueOthersInterface;

          associatedOptionsUrl.push({
            name: urlAssociatedOptionData.prestashop.product_option_value?.[0]
              ?.name?.[0]?.language?.[0]?._,
            color:
              urlAssociatedOptionData.prestashop.product_option_value?.[0]
                ?.color?.[0],
          });
        }

        options = {
          ...options,
          name: processFeatureOptionsDataValue.prestashop?.product_option?.[0]
            ?.name?.[0]?.language?.[0]?._,
          associatedOptionsUrl,
        };
      }

      const newData = {
        color,
        name,
        options,
      };

      dataOptionsValue.push(newData);
    }

    return dataOptionsValue;
  }
}
