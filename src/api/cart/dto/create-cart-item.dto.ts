import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCartItemDto {
  @IsNotEmpty({ message: 'El productId es obligatorio' })
  @IsString()
  productId: string;

  @IsNotEmpty({ message: 'La cantidad es obligatoria' })
  @IsNumber()
  @IsPositive({ message: 'La cantidad debe ser mayor que 0' })
  quantity: number;

  @IsNotEmpty({ message: 'El precio es obligatorio' })
  @IsNumber()
  @IsPositive({ message: 'El precio debe ser mayor que 0' })
  price: number;
}

/**
 * DTO para la creación del carrito
 */
export class CreateCartDto {
  @IsNotEmpty({ message: 'Debe haber al menos un producto en el carrito' })
  @IsArray({ message: 'El campo items debe ser un array' })
  @ValidateNested({ each: true })
  @Type(() => CreateCartItemDto)
  items: CreateCartItemDto[];
}
