import { Controller, Post, Body } from '@nestjs/common';
import { ArtistDto } from './dtos/artists.dto';
import { ArtistService } from './artists.service';

@Controller('api/artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post('save')
  async createArtist(@Body() artistDto: ArtistDto) {
    const artist = await this.artistService.createsocialLinks(artistDto);
    return {
      message: 'Artista agregado con éxito',
      data: artist,
    };
  }
}
