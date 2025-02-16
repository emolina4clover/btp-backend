import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { ConfigurationMsClient } from '../http';
import { parseStringPromise } from 'xml2js';
import { PrestaShopProductsInterface } from '../../../api/interface/prestashop-products.interface';
import axios from 'axios';
import { PrestashopCategoriesResponseInterface } from '../../../api/interface/prestashop-categories-response.interface';

@Injectable()
export class PrestashopProductsClient {
  private logger = new Logger(PrestashopProductsClient.name);

  constructor(
    private readonly http: HttpService,
    private readonly configuration: ConfigurationMsClient,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Handles the API call to fetch Prestashop products from the specified endpoint.
   *
   * @param {number} numOfAttempts - The number of attempts made to call the API. Defaults to 1.
   */
  async _handleCallPrestashopProducts(
    numOfAttempts: number = 1,
  ): Promise<{ data: any; status: number }> {
    this.logger.verbose('_handleCallPrestashopProducts');
    try {
      const _config = this.configuration.execute();
      const endpoint = _config.endpoints.products;

      this.logger.debug(`Endpoint._handleCallPrestashopProducts: ${endpoint}`);

      const result: AxiosResponse<any> = await firstValueFrom(
        this.http.get(endpoint, {
          headers: {
            'Content-Type': 'application/xml',
          },
        }),
      );

      const products = (await parseStringPromise(
        result.data,
      )) as PrestaShopProductsInterface;

      return {
        data: products,
        status: result.status,
      };
    } catch (error) {
      this.logger.warn(
        `_handleCallPrestashopProducts Error connection api. (${JSON.stringify(
          error,
        )})`,
      );

      if (
        numOfAttempts <= Number(this.configService.get('HTTPCLIENT_ATTEMPTS'))
      ) {
        this.logger.warn(
          `_handleCallPrestashopProducts ATTEMPTS ${numOfAttempts}`,
        );
        return await this._handleCallPrestashopProducts(numOfAttempts + 1);
      }

      return {
        status: 460,
        data: {
          message: `Error connection _handleCallPrestashopProducts api. (${JSON.stringify(
            error,
          )})`,
        },
      };
    }
  }

  /**
   * Handles calling the PrestaShop API to fetch product details by ID.
   *
   * @param {string} id The ID of the product to fetch from the PrestaShop API.
   * @param {number} [numOfAttempts=1] The current number of retry attempts for the API call (default is 1).
   */
  async _handleCallPrestashopProductsById(
    id: string,
    numOfAttempts: number = 1,
  ): Promise<{ data: any; status: number }> {
    this.logger.verbose('_handleCallPrestashopProductsById');
    try {
      const _config = this.configuration.execute();
      const endpoint = `${_config.endpoints.products}/${id}`;

      this.logger.debug(
        `Endpoint._handleCallPrestashopProductsById: ${endpoint}`,
      );

      const result: AxiosResponse<any> = await firstValueFrom(
        this.http.get(endpoint, {
          headers: {
            'Content-Type': 'application/xml',
          },
        }),
      );

      const productsById = (await parseStringPromise(
        result.data,
      )) as PrestaShopProductsInterface;

      return {
        data: productsById,
        status: result.status,
      };
    } catch (error) {
      this.logger.warn(
        `_handleCallPrestashopProductsById Error connection api. (${JSON.stringify(
          error,
        )})`,
      );

      if (
        numOfAttempts <= Number(this.configService.get('HTTPCLIENT_ATTEMPTS'))
      ) {
        this.logger.warn(
          `_handleCallPrestashopProductsById ATTEMPTS ${numOfAttempts}`,
        );
        return await this._handleCallPrestashopProductsById(
          id,
          numOfAttempts + 1,
        );
      }

      return {
        status: 460,
        data: {
          message: `Error connection _handleCallPrestashopProductsById api. (${JSON.stringify(
            error,
          )})`,
        },
      };
    }
  }

  /**
   * Handles the request to retrieve custom product details from the PrestaShop API by product ID.
   *
   * @param {string} id - The ID of the product to retrieve.
   * @param {number} [numOfAttempts=1] - The current number of attempts to retrieve the data (used for retry logic).
   */
  async _handleCallPrestashopProductsCustomById(
    id: string,
    numOfAttempts: number = 1,
  ) {
    this.logger.verbose('_handleCallPrestashopProductsCustomById');
    try {
      const _config = this.configuration.execute();
      const endpoint = `${_config.endpoints.productsCustom}/${id}?output_format=JSON`;

      this.logger.debug(
        `Endpoint._handleCallPrestashopProductsCustomById: ${endpoint}`,
      );

      const result: AxiosResponse<any> = await firstValueFrom(
        this.http.get(endpoint),
      );

      return {
        data: result.data,
        status: result.status,
      };
    } catch (error) {
      this.logger.warn(
        `_handleCallPrestashopProductsCustomById Error connection api. (${JSON.stringify(
          error,
        )})`,
      );

      if (
        numOfAttempts <= Number(this.configService.get('HTTPCLIENT_ATTEMPTS'))
      ) {
        this.logger.warn(
          `_handleCallPrestashopProductsCustomById ATTEMPTS ${numOfAttempts}`,
        );
        return await this._handleCallPrestashopProductsCustomById(
          id,
          numOfAttempts + 1,
        );
      }

      return {
        status: 460,
        data: {
          message: `Error connection _handleCallPrestashopProductsCustomById api. (${JSON.stringify(
            error,
          )})`,
        },
      };
    }
  }

  /**
   * Handles fetching PrestaShop products by stock URL with retry functionality.
   *
   * @param {string} url - The URL used to fetch stock information for a product.
   * @param {number} [numOfAttempts=1] - The current attempt count for retrieving data.
   */
  async _handleCallPrestashopProductsByStockUrlCustom(
    url: string,
    numOfAttempts: number = 1,
  ): Promise<{ data: any; status: number }> {
    this.logger.verbose('_handleCallPrestashopProductsByStockUrlCustom');

    try {
      const stockId = this.extractNumberFromURL(url);

      const _config = this.configuration.execute();
      const endpoint = `${_config.endpoints.stock_availables}/${stockId}`;

      this.logger.debug(
        `Endpoint._handleCallPrestashopProductsByStockUrlCustom: ${endpoint}`,
      );

      const result: AxiosResponse<any> = await firstValueFrom(
        this.http.get(endpoint, {
          headers: {
            'Content-Type': 'application/xml',
          },
        }),
      );

      const stock = (await parseStringPromise(
        result.data,
      )) as PrestaShopProductsInterface;

      return {
        data: stock,
        status: result.status,
      };
    } catch (error) {
      this.logger.warn(
        `_handleCallPrestashopProductsByStockUrlCustom Error connection api. (${JSON.stringify(
          error,
        )})`,
      );

      if (
        numOfAttempts <= Number(this.configService.get('HTTPCLIENT_ATTEMPTS'))
      ) {
        this.logger.warn(
          `_handleCallPrestashopProductsByStockUrlCustom ATTEMPTS ${numOfAttempts}`,
        );
        return await this._handleCallPrestashopProductsByStockUrlCustom(
          url,
          numOfAttempts + 1,
        );
      }

      return {
        status: 460,
        data: {
          message: `Error connection _handleCallPrestashopProductsByStockUrlCustom api. (${JSON.stringify(
            error,
          )})`,
        },
      };
    }
  }

  /**
   * Handles the response for fetching an image from Prestashop.
   *
   * @param {string} imageUrl - The URL of the image to fetch.
   */
  async _handleCallPrestashopGetImageResponse(imageUrl: string) {
    return axios.get(imageUrl, { responseType: 'arraybuffer' });
  }

  /**
   * Handles the HTTP call to retrieve Prestashop Categories.
   *
   * This method attempts to fetch category data from a Prestashop API endpoint.
   * If the API call fails, it will retry based on the configured
   * maximum number of attempts (`HTTPCLIENT_ATTEMPTS`).
   *
   * @param {number} numOfAttempts - The current attempt count for the API call. Defaults to 1.
   */
  async _handleCallPrestashopCategories(numOfAttempts: number = 1): Promise<{
    data: any;
    status: number;
  }> {
    this.logger.verbose('_handleCallPrestashopCategories');
    try {
      const _config = this.configuration.execute();
      const endpoint = _config.endpoints.categories;

      this.logger.debug(
        `Endpoint._handleCallPrestashopCategories: ${endpoint}`,
      );

      const result: AxiosResponse<any> = await firstValueFrom(
        this.http.get(endpoint, {
          headers: {
            'Content-Type': 'application/xml',
          },
        }),
      );

      const categories = await parseStringPromise(result.data);

      return {
        data: categories,
        status: result.status,
      };
    } catch (error) {
      this.logger.warn(
        `_handleCallPrestashopCategories Error connection api. (${JSON.stringify(
          error,
        )})`,
      );

      if (
        numOfAttempts <= Number(this.configService.get('HTTPCLIENT_ATTEMPTS'))
      ) {
        this.logger.warn(
          `_handleCallPrestashopCategories ATTEMPTS ${numOfAttempts}`,
        );
        return await this._handleCallPrestashopCategories(numOfAttempts + 1);
      }

      return {
        status: 460,
        data: {
          message: `Error connection _handleCallPrestashopCategories api. (${JSON.stringify(
            error,
          )})`,
        },
      };
    }
  }

  /**
   * Handles the API call to fetch a Prestashop category by its ID, allowing for retries in case of errors.
   *
   * @param {string} id - The ID of the Prestashop category to retrieve.
   * @param {number} [numOfAttempts=1] - The current attempt count for the API call. Defaults to 1.
   */
  async _handleCallPrestashopCategoryById(
    id: string,
    numOfAttempts: number = 1,
  ): Promise<{ data: any; status: number }> {
    this.logger.verbose('_handleCallPrestashopCategoryById');
    try {
      const _config = this.configuration.execute();
      const endpoint = `${_config.endpoints.categories}/${id}`;

      this.logger.debug(
        `Endpoint._handleCallPrestashopCategoryById: ${endpoint}`,
      );

      const result: AxiosResponse<any> = await firstValueFrom(
        this.http.get(endpoint, {
          headers: {
            'Content-Type': 'application/xml',
          },
        }),
      );

      const categoriesProducts = await parseStringPromise(result.data);

      return {
        data: categoriesProducts,
        status: result.status,
      };
    } catch (error) {
      this.logger.warn(
        `_handleCallPrestashopCategoryById Error connection api. (${JSON.stringify(
          error,
        )})`,
      );

      if (
        numOfAttempts <= Number(this.configService.get('HTTPCLIENT_ATTEMPTS'))
      ) {
        this.logger.warn(
          `_handleCallPrestashopCategoryById ATTEMPTS ${numOfAttempts}`,
        );
        return await this._handleCallPrestashopCategoryById(
          id,
          numOfAttempts + 1,
        );
      }

      return {
        status: 460,
        data: {
          message: `Error connection _handleCallPrestashopCategoryById api. (${JSON.stringify(
            error,
          )})`,
        },
      };
    }
  }

  /**
   * Handles API requests to retrieve product combination data by ID from Prestashop.
   *
   * @param {string} id - The ID of the product combination to retrieve.
   * @param {number} [numOfAttempts=1] - The current retry attempt counter (default is 1).
   * @return {Promise<{ data: any; status: number }>} A promise that resolves with the retrieved product combination data and HTTP status or rejects in case of failure.
   */
  async _handleCallPrestashopProductsCombinationById(
    id: string,
    numOfAttempts: number = 1,
  ): Promise<{ data: any; status: number }> {
    this.logger.verbose('_handleCallPrestashopProductsCombinationById');
    try {
      const _config = this.configuration.execute();
      const endpoint = `${_config.endpoints.combinations}/${id}`;

      this.logger.debug(
        `Endpoint._handleCallPrestashopProductsCombinationById: ${endpoint}`,
      );

      const result: AxiosResponse<any> = await firstValueFrom(
        this.http.get(endpoint, {
          headers: {
            'Content-Type': 'application/xml',
          },
        }),
      );

      const combinationsById = (await parseStringPromise(result.data)) as any;

      return {
        data: combinationsById,
        status: result.status,
      };
    } catch (error) {
      this.logger.warn(
        `_handleCallPrestashopProductsCombinationById Error connection api. (${JSON.stringify(
          error,
        )})`,
      );

      if (
        numOfAttempts <= Number(this.configService.get('HTTPCLIENT_ATTEMPTS'))
      ) {
        this.logger.warn(
          `_handleCallPrestashopProductsCombinationById ATTEMPTS ${numOfAttempts}`,
        );
        return await this._handleCallPrestashopProductsCombinationById(
          id,
          numOfAttempts + 1,
        );
      }

      return {
        status: 460,
        data: {
          message: `Error connection _handleCallPrestashopProductsCombinationById api. (${JSON.stringify(
            error,
          )})`,
        },
      };
    }
  }

  /**
   * Handles API calls to PrestaShop with a configurable number of retry attempts.
   *
   * @param {string} url - The API endpoint URL for the PrestaShop service.
   * @param {number} [numOfAttempts=1] - The current retry attempt number (default is 1).
   */
  async _handleCallPrestashopUrlCustom(
    url: string,
    numOfAttempts: number = 1,
  ): Promise<{ data: any; status: number }> {
    this.logger.verbose('_handleCallPrestashopUrlCustom');
    const token = this.configService.get<string>('PRESTASHOP_API_TOKEN');

    try {
      const _config = this.configuration.execute();

      const endpoint = url.replace('https://', `https://${token}@`);

      this.logger.debug(`Endpoint._handleCallPrestashopUrlCustom: ${endpoint}`);

      const result: AxiosResponse<any> = await firstValueFrom(
        this.http.get(endpoint, {
          headers: {
            'Content-Type': 'application/xml',
          },
        }),
      );

      const data = (await parseStringPromise(result.data)) as any;

      return {
        data,
        status: result.status,
      };
    } catch (error) {
      this.logger.warn(
        `_handleCallPrestashopUrlCustom Error connection api. (${JSON.stringify(
          error,
        )})`,
      );

      if (
        numOfAttempts <= Number(this.configService.get('HTTPCLIENT_ATTEMPTS'))
      ) {
        this.logger.warn(
          `_handleCallPrestashopUrlCustom ATTEMPTS ${numOfAttempts}`,
        );
        return await this._handleCallPrestashopUrlCustom(
          url,
          numOfAttempts + 1,
        );
      }

      return {
        status: 460,
        data: {
          message: `Error connection _handleCallPrestashopProductsByStockUrlCustom api. (${JSON.stringify(
            error,
          )})`,
        },
      };
    }
  }

  /**
   * Extracts a number from the given URL string. Specifically, it looks for a pattern
   * where a number follows 'stock_availables/' within the URL and returns this number.
   *
   * @param url - The URL string from which the number is to be extracted.
   */
  private extractNumberFromURL(url: string): number | null {
    const regex = /stock_availables\/(\d+)/;
    const match = url.match(regex);
    return match ? parseInt(match[1], 10) : null;
  }
}
