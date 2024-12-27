import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigurationMsClientInterface } from '../interfaces/configuration-ms-client.interface';

@Injectable()
export class ConfigurationMsClient {
  constructor(private readonly configService: ConfigService) {}

  /**
   * It returns an object with two properties, endpoints and headers
   * @returns An object with two properties: endpoints and headers.
   */
  execute(): ConfigurationMsClientInterface {
    let url = `https://${this.configService.get<string>('PRESTASHOP_API_TOKEN')}@poleras.cl/api`;

    if (this.configService.get<string>('PRESTASHOP_DUMMY')) {
      url = this.configService.get<string>('PRESTASHOP_DUMMY');
    }

    return {
      endpoints: {
        categories: `${url}/categories`,
        products: `${url}/products`,
        combinations: `${url}/combinations`,
        stock_availables: `${url}/stock_availables`,
        baseUrl: url,
      },
      headers: null,
    };
  }
}
