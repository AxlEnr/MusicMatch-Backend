import { IsString, IsOptional } from 'class-validator';

export class PlaylistDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  coverUrl?: string;

  @IsString()
  @IsOptional()
  ownerID?: string;
}
