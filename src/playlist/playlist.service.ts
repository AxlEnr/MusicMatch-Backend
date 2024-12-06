import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlaylistDto } from './dtos/playlist.dto';

@Injectable()
export class PlaylistService {
  constructor(private readonly prisma: PrismaService) {}

  async createPlaylist(playistDto: PlaylistDto) {
    try {
      const createPlaylist = await this.prisma.playlist.create({
        data: {
          ...playistDto,
        },
      });
      return createPlaylist;
    } catch (error) {
      throw new Error(`Error al crear el artista: ${error.message}`);
    }
  }
}

