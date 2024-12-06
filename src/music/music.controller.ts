import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { MusicDto } from './dtos/music.dto';
import { MusicService } from './music.service';

@Controller('api/music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  // Crear música
  @Post('save')
  async createMusic(@Body() MusicDto: MusicDto) {
    const music = await this.musicService.createMusic(MusicDto);
    return {
      message: 'Música agregada con éxito',
      data: music,
    };
  }

  // Buscar música por nombre
  @Get('getMusic/:songName') 
  async getArtistByName(@Param('songName') songName: string) {
    console.log('Cancion recibido en el controlador:', songName);
    try {
      const userProfile = await this.musicService.getMusicByName(songName);
      if (!userProfile) {
        return {
          message: 'Artista no encontrado',
          data: null,
        };
      }
      return {
        message: 'Artista encontrado',
        data: userProfile,
      };
    } catch (error) {
      console.error('Error al obtener el artista:', error); 
      return {
        message: 'Ocurrió un error inesperado al obtener el artista',
        data: null,
      };
    }
  }
}
