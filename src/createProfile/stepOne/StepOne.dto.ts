import { IsEmail, IsString, IsOptional, IsStrongPassword, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail({}, { message: 'El correo electrónico no tiene un formato válido' })
  email: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  profileImg?: string;

  @IsString()
  @IsStrongPassword({}, {message: 'Tu contraseña debe ser fuerte, intenta de nuevo'})
  userPass: string;

  @IsOptional()
  @IsString()
  userDesc?: string;
}
