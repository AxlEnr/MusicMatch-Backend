import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MusicDto } from './dtos/music.dto';

@Injectable()
export class MusicService {
  constructor(private readonly prisma: PrismaService) {}

  async createMusic(MusicDto: MusicDto) {
    const createMusic = await this.prisma.music.create({
      data: {
        ...MusicDto,
      },
    });
    return createMusic;
  }

  async getMusic() {
    return this.prisma.music.findMany();
  }
}

