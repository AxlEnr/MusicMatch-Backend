import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class musicService{
    private prisma = new PrismaClient();

    async musicPreference(data: {
        songName: string,
        artistId: string,
        userId: string,
    }){
        return this.prisma.musicPreference.create({ data });
    }

    async getMusicById(id: string){
        return this.prisma.musicPreference.findUnique({where: {id}})
    }
}