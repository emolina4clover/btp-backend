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
export class PrestashopResourcesClient {
  private logger = new Logger(PrestashopResourcesClient.name);

  constructor(
    private readonly http: HttpService,
    private readonly configuration: ConfigurationMsClient,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Handles the call to Prestashop resources by making a GET request to the configured endpoint
   * and parsing the received XML response.
   **/
  async _handleCallPrestashopResources(
    numOfAttempts: number = 1,
  ): Promise<{ data: any; status: number }> {
    this.logger.verbose('_handleCallPrestashopResources');
    try {
      const _config = this.configuration.execute();
      const endpoint = _config.endpoints.baseUrl;

      this.logger.debug(`Endpoint._handleCallPrestashopResources: ${endpoint}`);

      const result: AxiosResponse<any> = await firstValueFrom(
        this.http.get(endpoint, {
          headers: {
            'Content-Type': 'application/xml',
          },
        }),
      );

      const resources = await parseStringPromise(result.data);

      return {
        data: resources,
        status: result.status,
      };
    } catch (error) {
      this.logger.warn(
        `_handleCallPrestashopResources Error connection api. (${JSON.stringify(
          error,
        )})`,
      );

      if (
        numOfAttempts <= Number(this.configService.get('HTTPCLIENT_ATTEMPTS'))
      ) {
        this.logger.warn(
          `_handleCallPrestashopResources ATTEMPTS ${numOfAttempts}`,
        );
        return await this._handleCallPrestashopResources(numOfAttempts + 1);
      }

      return {
        status: 460,
        data: {
          message: `Error connection _handleCallPrestashopResources api. (${JSON.stringify(
            error,
          )})`,
        },
      };
    }
  }
}
