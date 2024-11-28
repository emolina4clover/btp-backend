import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ExternalApiService {
  private readonly logger = new Logger(ExternalApiService.name);
  private readonly token: string;

  constructor(private configService: ConfigService) {
    this.token = this.configService.get<string>('PRESTASHOP_API_TOKEN');
  }

  private get authUrl() {
    return `https://${this.token}@poleras.cl/api`;
  }

  async getResources(): Promise<any> {
    try {
      const response = await axios.get(this.authUrl, {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
      const xmlData = response.data;
      const jsonData = await parseStringPromise(xmlData);
      return jsonData;
    } catch (error) {
      this.logger.error('Error al obtener recursos', error);
      throw error;
    }
  }

  async getProducts(): Promise<any[]> {
    try {
      // Paso 1: Obtener la lista de productos
      this.logger.debug('Solicitando lista de productos...');
      const response = await axios.get(`${this.authUrl}/products`, {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
      const xmlData = response.data;
      const jsonData = await parseStringPromise(xmlData);

      this.logger.debug('Respuesta de la API de productos obtenida.');

      // Agregar log para inspeccionar la estructura
      this.logger.debug(
        'Estructura de jsonData.prestashop.products:',
        JSON.stringify(jsonData.prestashop.products, null, 2),
      );

      let productsArray = [];

      if (Array.isArray(jsonData.prestashop.products)) {
        // Si 'products' es un arreglo
        this.logger.debug('jsonData.prestashop.products es un arreglo.');
        productsArray = jsonData.prestashop.products[0].product;
      } else {
        // Si 'products' es un objeto
        this.logger.debug('jsonData.prestashop.products es un objeto.');
        productsArray = jsonData.prestashop.products.product;
      }

      if (!productsArray || productsArray.length === 0) {
        this.logger.error('La lista de productos está vacía.');
        return [];
      }

      this.logger.debug(`Se encontraron ${productsArray.length} productos.`);

      const productIds = productsArray.map((p) => p.$.id);

      this.logger.debug('IDs de productos obtenidos:', productIds);

      // Paso 2: Obtener detalles de cada producto
      this.logger.debug('Solicitando detalles de cada producto...');
      const productDetailsPromises = productIds.map((id) =>
        this.getProductDetails(id),
      );

      const productsDetails = await Promise.all(productDetailsPromises);

      this.logger.debug('Detalles de productos obtenidos.');

      return productsDetails;
    } catch (error) {
      this.logger.error('Error al obtener productos:', error);
      throw error;
    }
  }

  private async getProductDetails(id: string): Promise<any> {
    try {
      this.logger.debug(`Solicitando detalles del producto con ID ${id}...`);
      const response = await axios.get(`${this.authUrl}/products/${id}`, {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
      const xmlData = response.data;
      const jsonData = await parseStringPromise(xmlData);

      this.logger.debug(`Detalles del producto ${id} obtenidos.`);

      // Loguear los detalles del producto
      this.logger.debug(
        `Estructura del producto ${id}:`,
        JSON.stringify(jsonData, null, 2),
      );

      return jsonData;
    } catch (error) {
      this.logger.error(`Error al obtener detalles del producto ${id}:`, error);
      throw error;
    }
  }
}
