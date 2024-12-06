import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PreferencesDto } from './dtos/preferences.dto';
@Injectable()
export class PreferencesService {
  constructor(private readonly prisma: PrismaService) {}

  async createPreference(createUserMusicPreferenceDto: PreferencesDto) {
    return this.prisma.userMusicPreference.create({
      data: {
        ...createUserMusicPreferenceDto,
      },
    });
  }

  async getPreferencesByUser(userID: string) {
    return this.prisma.userMusicPreference.findMany({
      where: { userID },
    });
  }
}
