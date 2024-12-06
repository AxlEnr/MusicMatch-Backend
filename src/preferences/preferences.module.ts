import { Controller, Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';
import { UserMusicPreferenceController } from './preferences.controller';
import { PreferencesService } from './preferences.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserMusicPreferenceController],
  providers: [PreferencesService],
})
export class PreferencesModule {}
