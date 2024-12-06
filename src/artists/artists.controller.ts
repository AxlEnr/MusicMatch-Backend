import { Controller, Post, Body, BadRequestException, Get, Param } from '@nestjs/common';
import { ArtistDto } from './dtos/artists.dto';
import { ArtistService } from './artists.service';


@Controller('api/artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post('save')
  async createArtist(@Body() artistDto: ArtistDto) {
    try {
      const artist = await this.artistService.createArtist(artistDto);
      console.log(artistDto);
      return {
        message: 'Artista agregado con éxito',
        data: artist,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get('getArtist/:artistName') 
  async getArtistByName(@Param('artistName') artistName: string) {
    console.log('Artista recibido en el controlador:', artistName);
    try {
      const userProfile = await this.artistService.getArtistByName(artistName);
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
