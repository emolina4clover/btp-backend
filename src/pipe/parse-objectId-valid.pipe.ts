import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ParseObjectIdValidPipe implements PipeTransform<string> {
  /**
   * Transforms the given value by checking if it is a valid MongoDB ObjectId.
   * Throws a BadRequestException if the value is not a valid ObjectId.
   *
   * @param {string} value - The value to be transformed.
   * @param {ArgumentMetadata} metadata - Additional metadata about the argument.
   * @return {string} - The transformed value if it is a valid ObjectId.
   * @throws {BadRequestException} - If the value is not a valid ObjectId.
   */
  transform(value: string, metadata: ArgumentMetadata): string {
    if (!Types.ObjectId.isValid(value)) {
      throw new BadRequestException(`${value} is not a valid`);
    }
    return value;
  }
}
