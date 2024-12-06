import { IsString, IsOptional } from 'class-validator';

export class AlbumDto {
  @IsString()
  albumName: string;

  @IsString()
  @IsOptional()
  artistID?: string;

  @IsString()
  @IsOptional()
  releaseDate?: Date;

  @IsString()
  @IsOptional()
  coverUrl?: string;
}
