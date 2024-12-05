import { Module } from '@nestjs/common';
import { TransformationsService } from './transformations.service';

@Module({
  providers: [TransformationsService],
  exports: [TransformationsService],
})
export class TransformationsModule {}
