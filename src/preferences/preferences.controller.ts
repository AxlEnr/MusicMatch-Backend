// user-music-preference.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PreferencesDto } from './dtos/preferences.dto';
import { PreferencesService } from './preferences.service';

@Controller('api/preferences')
export class UserMusicPreferenceController {
  constructor(private readonly preferenceService: PreferencesService) {}

  @Post('save')
  async createPreference(@Body() createUserMusicPreferenceDto: PreferencesDto) {
    const preference = await this.preferenceService.createPreference(createUserMusicPreferenceDto);
    return {
      message: 'Preferencia de música creada con éxito',
      data: preference,
    };
  }

  @Get('getPreferencesByUser/:userID')
  async getPreferencesByUser(@Param('userID') userID: string) {
    const preferences = await this.preferenceService.getPreferencesByUser(userID);
    return {
      message: 'Preferencias recuperadas con éxito',
      data: preferences,
    };
  }
}
