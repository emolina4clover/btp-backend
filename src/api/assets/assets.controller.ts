import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  Response,
} from '@nestjs/common';
import { AssetsService } from './assets.service';
import { Public } from '../../guards/public.guard';
import { Response as Res } from 'express';

@Controller('assets')
export class AssetsController {
  private readonly logger = new Logger(AssetsController.name);

  constructor(private readonly assetsService: AssetsService) {}

  @Public()
  @Get(':image')
  async getImages(@Param('image') image: string, @Response() res: Res) {
    if (!image) {
      // Si no se proporciona imageUrl, devolvemos un error
      throw new HttpException(
        'El parámetro "image" es obligatorio.',
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const response = await this.assetsService.getImages(image);

      res.setHeader('Content-Type', response.mimeType);
      res.setHeader('Content-Disposition', 'inline');

      res.send(response.data);
    } catch (error) {
      // Manejamos errores con una respuesta personalizada
      console.error('Error al obtener la imagen:', error.message);
      throw new HttpException(
        'No se pudo cargar la imagen desde la URL proporcionada.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
