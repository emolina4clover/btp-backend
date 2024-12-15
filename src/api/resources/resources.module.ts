import { Module } from '@nestjs/common';
import { ResourcesController } from './resources.controller';
import { MicroservicesModule } from '../../lib/microservices/microservices.module';
import { ResourcesService } from './resources.service';

@Module({
  imports: [MicroservicesModule],
  controllers: [ResourcesController],
  providers: [ResourcesService],
})
export class ResourcesModule {}
