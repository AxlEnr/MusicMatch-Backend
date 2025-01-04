import { IsEmail, IsString, IsOptional, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail({}, { message: 'El correo electrónico no tiene un formato válido' })
  email: string;

  @IsOptional()
  @IsString()
  profileImg?: string;

  @IsString()
  @IsStrongPassword({}, {message: 'Tu contraseña debe ser fuerte, intenta de nuevo'})
  userPass: string;

  @IsOptional()
  @IsString()
  userDesc?: string;
}
