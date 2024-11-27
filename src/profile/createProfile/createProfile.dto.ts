import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class createProfileDto {
  // Campos obligatorios
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  profileIMG: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  // Campos opcionales
  @IsString()
  @IsOptional()
  twitter?: string;

  @IsString()
  @IsOptional()
  facebook?: string;

  @IsString()
  @IsOptional()
  instagram?: string;
}
