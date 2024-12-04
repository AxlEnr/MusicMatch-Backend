import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createProfileDto } from './createProfile/createProfile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async createProfile(createProfileDto: createProfileDto) {
    const user = await this.prisma.user.create({
      data: {
        ...createProfileDto,
      },
    });
    return user;
  }

  // Método para obtener perfiles
  async getProfiles() {
    return this.prisma.user.findMany();
  }
}

