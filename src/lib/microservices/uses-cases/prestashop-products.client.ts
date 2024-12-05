import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { ConfigurationMsClient } from '../http';

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
   * @param {any} data - The request data for creating the package.
   * @param {string} authorization - The authorization token for authentication.
   * @param {number} [numOfAttempts=1] - The number of attempts made for the API call.
   * @returns {Promise<{ data: any; status: number }>} - The response from the API call.
   */
  async _handleCallPrestashopProducts(
    data: any,
    authorization: string,
    numOfAttempts: number = 1,
  ): Promise<{ data: any; status: number }> {
    this.logger.verbose('_handleCallCreatePendingTicketV1');
    try {
      const _config = this.configuration.execute();
      const endpoint = _config.endpoints.products;

      const result: AxiosResponse<any> = await firstValueFrom(
        this.http.get(endpoint, {
          headers: {
            'Content-Type': 'application/xml',
          },
        }),
      );

      return {
        data: result?.data,
        status: result.status,
      };
    } catch (error) {
      this.logger.warn(
        `_handleCallPrestashopProducts Error connection api. (${JSON.stringify(
          error?.response?.data,
        )})`,
      );

      if (
        numOfAttempts <= Number(this.configService.get('HTTPCLIENT_ATTEMPTS'))
      ) {
        this.logger.warn(
          `_handleCallPrestashopProducts ATTEMPTS ${numOfAttempts}`,
        );
        return await this._handleCallPrestashopProducts(
          data,
          authorization,
          numOfAttempts + 1,
        );
      }

      return {
        status: 460,
        data: {
          message: `Error connection _handleCallPrestashopProducts api. (${JSON.stringify(
            error?.response?.data,
          )})`,
        },
      };
    }
  }
}
