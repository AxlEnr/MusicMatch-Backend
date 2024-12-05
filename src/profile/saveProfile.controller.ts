import { Controller, Post, Body, Get, Param} from '@nestjs/common';
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

  @Get('getProfileByEmail/:email') 
  async getProfileByEmail(@Param('email') email: string) {
    console.log('Email recibido en el controlador:', email);
    try {
      const userProfile = await this.profileService.getProfileByEmail(email);
      if (!userProfile) {
        return {
          message: 'Perfil no encontrado',
          data: null,
        };
      }
      return {
        message: 'Perfil encontrado',
        data: userProfile,
      };
    } catch (error) {
      console.error('Error al obtener el perfil:', error); 
      return {
        message: 'Ocurrió un error inesperado al obtener el perfil',
        data: null,
      };
    }
  }
  
}

