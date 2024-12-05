import { IsString, IsOptional, IsUUID } from 'class-validator';

export class SocialLinksDto{
  @IsOptional()
  @IsString()
  platformName : string;

  @IsOptional()
  @IsString()
  profileLink : string;

  @IsUUID()
  userID: string;

}
