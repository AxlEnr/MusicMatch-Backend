import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArtistDto } from './dtos/artists.dto';

@Injectable()
export class ArtistService {
  constructor(private readonly prisma: PrismaService) {}

  async createsocialLinks(ArtistDto: ArtistDto) {
    const createArtist = await this.prisma.artist.create({
      data: {
        ...ArtistDto,
      },
    });
    return createArtist;
  }

  async getArtist() {
    return this.prisma.artist.findMany();
  }
}

