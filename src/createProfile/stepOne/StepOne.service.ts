import { Injectable, ConflictException } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";


@Injectable()
export class StepOneService {
    private prisma = new PrismaClient();

    async createDataUser(data: {
        username: string,
        email: string,
        profileImg?: string,
        userPass: string,
        userDesc?: string,
    }) {
        const existingUser = await this.prisma.user.findFirst({
            where: {
              OR: [
                { email: data.email },
                { username: data.username },
              ],
            },
          });
      
          if (existingUser) {
            throw new ConflictException('El correo electrónico o el nombre de usuario ya está en uso.');
          }
      
          return this.prisma.user.create({ data });
    }

    async getDataUserByEmail(email: string){
        return this.prisma.user.findFirst({ where: { email } });
    }
}