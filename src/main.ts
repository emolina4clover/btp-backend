import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const logger = new Logger('main');

  const app = await NestFactory.create(AppModule);

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  app.enableCors({ origin: '*' });

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT).then(() => {
    logger.log(`Microservice start on ${process.env.PORT}`);
  });
}
bootstrap().then();
