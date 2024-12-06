import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AlbumDto } from './dtos/album.dto';
import { AlbumService } from './album.service';

@Controller('api/album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post('save')
  async createAlbum(@Body() albumDto: AlbumDto) {
    try {
      const artist = await this.albumService.createAlbum(albumDto);
      console.log(albumDto);
      return {
        message: 'Album agregado con éxito',
        data: artist,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  
}
