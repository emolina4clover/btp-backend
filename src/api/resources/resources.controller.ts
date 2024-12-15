import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  Response,
} from '@nestjs/common';
import { ResourcesService } from './resources.service';

@Controller('resources')
export class ResourcesController {
  private readonly logger = new Logger(ResourcesController.name);

  constructor(private readonly resourcesService: ResourcesService) {}

  @Get()
  async geResources() {
    return this.resourcesService.getResources();
  }
}
