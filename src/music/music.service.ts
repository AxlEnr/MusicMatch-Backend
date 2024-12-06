import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MusicDto } from './dtos/music.dto';

@Injectable()
export class MusicService {
  constructor(private readonly prisma: PrismaService) {}

  // Crear música
  async createMusic(MusicDto: MusicDto) {
    const createMusic = await this.prisma.music.create({
      data: {
        ...MusicDto,
      },
    });
    return createMusic;
  }

  // Obtener música por nombre
  async getMusicByName(songName: string) {
    console.log('Buscando cancion con su nombre:', songName);
    const user = await this.prisma.music.findFirst({
      where: { songName }, 
    });
    return user;
  }
}
