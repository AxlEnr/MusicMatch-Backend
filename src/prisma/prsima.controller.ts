import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('prisma')
export class PrismaController {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todos los usuarios
  @Get('users')
  async getUsers() {
    const users = await this.prisma.user.findMany({
      include: {
        socialLinks: true,
        preferences: {
          include: {
            music: true,
            artist: true,
          },
        },
      },
    });
    return {
      message: 'Usuarios obtenidos correctamente',
      data: users,
    };
  }

  // Obtener un usuario por ID
  @Get('users/:id')
  async getUserById(@Param('id') id: string) {
    const user = await this.prisma.user.findUnique({
      where: { idUsers: id },
      include: {
        socialLinks: true,
        preferences: {
          include: {
            music: true,
            artist: true,
          },
        },
      },
    });

    if (!user) {
      return {
        message: `No se encontró un usuario con el ID ${id}`,
      };
    }

    return {
      message: 'Usuario obtenido correctamente',
      data: user,
    };
  }

  // Crear un usuario con datos básicos
  @Post('users')
  async createUser(@Body() body: { username: string; email: string; userPass: string; profileImg?: string }) {
    const { username, email, userPass, profileImg } = body;

    const newUser = await this.prisma.user.create({
      data: {
        username,
        email,
        userPass,
        profileImg,
      },
    });

    return {
      message: 'Usuario creado correctamente',
      data: newUser,
    };
  }

  // Agregar un enlace social a un usuario
  @Post('users/:id/social-links')
  async addSocialLink(
    @Param('id') id: string,
    @Body() body: { platformName: string; profileLink: string },
  ) {
    const { platformName, profileLink } = body;

    const socialLink = await this.prisma.userSocialLink.create({
      data: {
        platformName,
        profileLink,
        userID: id,
      },
    });

    return {
      message: 'Enlace social agregado correctamente',
      data: socialLink,
    };
  }

  // Actualizar la descripción de un usuario
  @Patch('users/:id/description')
  async updateUserDescription(@Param('id') id: string, @Body() body: { userDesc: string }) {
    const { userDesc } = body;

    const updatedUser = await this.prisma.user.update({
      where: { idUsers: id },
      data: {
        userDesc,
      },
    });

    return {
      message: 'Descripción actualizada correctamente',
      data: updatedUser,
    };
  }

  // Eliminar un usuario por ID
  @Delete('users/:id')
  async deleteUser(@Param('id') id: string) {
    const deletedUser = await this.prisma.user.delete({
      where: { idUsers: id },
    });

    return {
      message: `Usuario con ID ${id} eliminado correctamente`,
      data: deletedUser,
    };
  }
}
