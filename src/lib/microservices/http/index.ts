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
        products: `${url}/products`,
        stock_availables: `${url}/stock_availables`,
      },
      headers: null,
    };
  }
}
