import { Controller, Post, Body } from '@nestjs/common';
import { MusicDto } from './dtos/music.dto';
import { MusicService } from './music.service';

@Controller('api/music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Post('save')
  async createArtist(@Body() MusicDto: MusicDto) {
    const artist = await this.musicService.createMusic(MusicDto);
    return {
      message: 'Musica agregada con éxito',
      data: artist,
    };
  }
}
