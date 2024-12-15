import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrestashopProductsClient } from '../../lib/microservices/uses-cases/prestashop-products.client';
import { PrestaShopProductsInterface } from '../interface/prestashop-products.interface';
import { PrestaShopProductsDetailsInterface } from '../interface/prestashop-products-detail.interface';
import { transformData } from '../../utils/transform-data-products';
import {
  PrestashopProductsStockInterface,
  PrestashopProductsStockResponseInterface,
} from '../interface/prestashop-products-stock.interface';
import { Public } from '../../guards/public.guard';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AssetsService {
  private readonly logger = new Logger(AssetsService.name);

  constructor(
    private prestashopProductsClient: PrestashopProductsClient,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Fetches an image from a given URL after appending a Prestashop API token for authentication.
   *
   * @param {string} image - The base64 encoded URL of the image to fetch.
   * @return {Promise<{data: Buffer, mimeType: string}>} A promise that resolves to an object containing
   * the image data (as a Buffer) and its MIME type.
   */
  async getImages(image: string): Promise<{ data: Buffer; mimeType: string }> {
    const token = this.configService.get<string>('PRESTASHOP_API_TOKEN');
    const url = atob(image);

    const urlWithToken = url.replace('https://', `https://${token}@`);

    this.logger.debug(`Fetching image from URL: ${urlWithToken}`);

    const response =
      await this.prestashopProductsClient._handleCallPrestashopGetImageResponse(
        urlWithToken,
      );

    const mimeType = response.headers['content-type'];

    return {
      data: response.data,
      mimeType,
    };
  }
}
