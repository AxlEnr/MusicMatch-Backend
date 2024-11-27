import { Injectable } from '@nestjs/common';
import { createProfileDto } from './createProfile/createProfile.dto';

@Injectable()
//Servicio para crear el perfil
export class ProfileService {
  createProfile(data: createProfileDto) {
    console.log('Perfil creado:', data);
    return { message: 'Datos guardados con éxito', data };
  }
}
