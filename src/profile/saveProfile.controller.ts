import { Controller, Post, Body} from '@nestjs/common';
import { ProfileService } from './saveProfile.service';
import { createProfileDto } from './createProfile/createProfile.dto';

@Controller('api/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('save')
  async createProfile(@Body() createProfileDto: createProfileDto) {
    const user = await this.profileService.createProfile(createProfileDto);
    return {
      message: 'Perfil creado con éxito',
      data: user,
    };
  }
}

