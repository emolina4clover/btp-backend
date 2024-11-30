// dtos/delivery-user.dto.ts
import { IsString, IsDate, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';

export class DeliveryUserDto {
  @IsString()
  idType: string; // RUN, etc.

  @IsString()
  idNumber: string;

  @IsString()
  newUser: boolean;

  @IsString()
  active: boolean;

  @IsString()
  trash: boolean;

  @IsString()
  identityCard: string;

  @IsDate()
  @Type(() => Date)
  birthDate: Date;

}
