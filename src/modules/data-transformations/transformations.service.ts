import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';

@Injectable()
export class TransformationsService {
  private readonly logger = new Logger(TransformationsService.name);

  async transformData(productsData: any[]): Promise<any[]> {
    this.logger.debug('Iniciando transformación de datos...');
    return Promise.all(
      productsData.map(async (productData, index) => {
        this.logger.debug(`Transformando producto ${index + 1}/${productsData.length}...`);
        
        const productArray = productData.prestashop.product;
        if (!productArray || productArray.length === 0) {
          this.logger.error(`Datos del producto faltantes en productData: ${JSON.stringify(productData, null, 2)}`);
          return null;
        }
        const product = productArray[0];

        // Acceder a los valores correctamente
        const id = product.id?.[0] || '';
        const id_default_image = product.id_default_image?.[0]?.$['xlink:href'] || '';
        const minimal_quantity = product.minimal_quantity?.[0] || '';
        const low_stock_alert = product.low_stock_alert?.[0] || '';
        const price = product.price?.[0] || '';

        // Acceder a los campos que están dentro de 'language'
        const name = product.name?.[0]?.language?.[0]?._ || '';
        const description = product.description?.[0]?.language?.[0]?._ || '';
        const description_short = product.description_short?.[0]?.language?.[0]?._ || '';

        this.logger.debug(`Producto ${id} - Nombre: ${name}`);

        const images = await this.extractImages(product);

        let stockQuantity = 0;
        const stockAvailable = product.associations?.[0]?.stock_availables?.[0]?.stock_available?.[0];
        if (stockAvailable && stockAvailable.$ && stockAvailable.$['xlink:href']) {
          stockQuantity = await this.extractStockQuantity(stockAvailable.$['xlink:href']);
        }

        return {
          id,
          id_default_image,
          minimal_quantity,
          low_stock_alert,
          price,
          name,
          description,
          description_short,
          images,
          stock_quantity: stockQuantity,
        };
      }),
    ).then(results => results.filter(product => product !== null));
  }

  private async extractImages(product): Promise<string[]> {
    const imagesNode = product.associations?.[0]?.images?.[0]?.image || [];
    if (imagesNode.length === 0) {
      this.logger.debug('No se encontraron imágenes para el producto.');
      return [];
    }
    const imageUrls = imagesNode.map((img) => img.$['xlink:href'] || '');
    this.logger.debug(`Imágenes extraídas: ${imageUrls.length}`);
    return imageUrls;
  }   

  private async extractStockQuantity(stockAvailableLink): Promise<number> {
    try {
      this.logger.debug(`Solicitando stock disponible desde ${stockAvailableLink}...`);
      const response = await axios.get(stockAvailableLink, {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
      const xmlData = response.data;
      const jsonData = await parseStringPromise(xmlData);
      const quantity = jsonData.prestashop.stock_available.quantity?.[0] || '0';
      this.logger.debug(`Stock disponible obtenido: ${quantity}`);
      return parseInt(quantity, 10);
    } catch (error) {
      this.logger.error('Error al obtener stock disponible:', error);
      return 0;
    }
  }
}
