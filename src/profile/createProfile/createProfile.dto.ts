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
  profileImg: string;

  @IsNotEmpty()
  @IsString()
  userPass: string;

  @IsNotEmpty()
  @IsString()
  userDesc: string;
}
