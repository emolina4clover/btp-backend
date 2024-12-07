import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { ConfigurationMsClient } from '../http';
import { parseStringPromise } from 'xml2js';
import { PrestaShopProductsInterface } from '../../../api/interface/prestashop-products.interface';

@Injectable()
export class PrestashopProductsClient {
  private logger = new Logger(PrestashopProductsClient.name);

  constructor(
    private readonly http: HttpService,
    private readonly configuration: ConfigurationMsClient,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Handles the call to Meli API v2 to create a package.
   *
   * @param {number} [numOfAttempts=1] - The number of attempts made for the API call.
   * @returns {Promise<{ data: any; status: number }>} - The response from the API call.
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
   * Handles the call to Meli API v2 to create a package.
   *
   * @param id
   * @param {number} [numOfAttempts=1] - The number of attempts made for the API call.
   * @returns {Promise<{ data: any; status: number }>} - The response from the API call.
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
}
