// dtos/logistic-user.dto.ts
import { IsString } from 'class-validator';

export class LogisticUserDto {
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
  logisticCompanyId: string;
}
