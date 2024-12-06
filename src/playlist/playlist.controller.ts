import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { PlaylistDto } from './dtos/playlist.dto';
import { PlaylistService } from './playlist.service';


@Controller('api/playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post('save')
  async createPlaylist(@Body() playistDto: PlaylistDto) {
    try {
      const artist = await this.playlistService.createPlaylist(playistDto);
      console.log(playistDto);
      return {
        message: 'Playlist agregada con éxito',
        data: artist,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  
}
