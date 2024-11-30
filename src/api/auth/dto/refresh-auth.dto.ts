import { IsNotEmpty, IsString } from 'class-validator';

export class RefreshAuthDto {
  @IsString()
  @IsNotEmpty()
  readonly refreshToken: string;
}
