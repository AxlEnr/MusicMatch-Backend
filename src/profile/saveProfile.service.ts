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


  async getProfileByEmail(email: string) {
    console.log('Buscando usuario con email:', email);
    const user = await this.prisma.user.findUnique({
      where: { email }, 
    });
    //console.log('Resultado de búsqueda en Prisma:', user); 
    return user;
  }
  
  
  
}

