import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsNumber()
  @IsNotEmpty()
  PORT: number;

  @IsNumber()
  @IsNotEmpty()
  THROTTLE_TTL: number;

  @IsNumber()
  @IsNotEmpty()
  THROTTLE_LIMIT: number;

  @IsString()
  @IsNotEmpty()
  JWT_SECRET: string;

  @IsString()
  @IsNotEmpty()
  JWT_SECRET_EXPIRES_IN: string;

  @IsString()
  @IsNotEmpty()
  JWT_SECRET_EXPIRES_REFRESH_IN: string;

  @IsString()
  @IsNotEmpty()
  JWT_SECRET_ATTEMPTS_REFRESH_IN: string;

  @IsString()
  @IsNotEmpty()
  MONGODB_URL: string;

  @IsString()
  @IsNotEmpty()
  MONGODB_USER: string;

  @IsString()
  @IsNotEmpty()
  PRESTASHOP_API_TOKEN: string;

  @IsString()
  @IsNotEmpty()
  PRESTASHOP_API_URL: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
