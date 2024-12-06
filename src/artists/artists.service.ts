import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArtistDto } from './dtos/artists.dto';

@Injectable()
export class ArtistService {
  constructor(private readonly prisma: PrismaService) {}

  async createArtist(artistDto: ArtistDto) {
    try {
      const createArtist = await this.prisma.artist.create({
        data: {
          ...artistDto,
        },
      });
      return createArtist;
    } catch (error) {
      throw new Error(`Error al crear el artista: ${error.message}`);
    }
  }
  
  

  async getArtistByName(artistName: string) {
    console.log('Buscando artista con su nombre:', artistName);
    const user = await this.prisma.artist.findFirst({
      where: { artistName }, 
    });
    return user;
  }
  
}

