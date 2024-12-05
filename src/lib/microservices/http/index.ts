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
    const url = `https://${this.configService.get<string>('PRESTASHOP_API_TOKEN')}@poleras.cl/api`;
    return {
      endpoints: {
        products: `${url}/products`,
      },
      headers: null,
    };
  }
}
