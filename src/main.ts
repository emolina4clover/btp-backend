import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('main');

  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });

  await app.listen(process.env.PORT).then(() => {
    logger.log(`Microservice start on ${process.env.PORT}`);
  });
}
bootstrap().then();
