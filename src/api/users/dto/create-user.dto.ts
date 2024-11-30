// dtos/create-user.dto.ts
import {
  IsString,
  IsEmail,
  IsEnum,
  ValidateNested,
  ValidateIf,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
