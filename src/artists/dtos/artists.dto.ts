import { IsString } from 'class-validator';

export class ArtistDto {
  @IsString()
  artistName: string;
}
