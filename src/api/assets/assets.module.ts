import { Module } from '@nestjs/common';
import { AssetsController } from './assets.controller';
import { MicroservicesModule } from '../../lib/microservices/microservices.module';
import { AssetsService } from './assets.service';

@Module({
  imports: [MicroservicesModule],
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AssetsModule {}
