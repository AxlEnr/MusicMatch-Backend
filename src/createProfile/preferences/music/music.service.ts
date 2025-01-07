import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class musicService{
    private prisma = new PrismaClient();


    //FUNCIONES PARA LA TABLA MUSICA
    async createMusic(data: {
        songName: string,
        artistId: string,
    }){
        return this.prisma.music.create({ data });
    }

    async getMusicByName(songName: string){
        return this.prisma.music.findFirst({where: {songName}});
    }

    async getMusicById(id: string){
        return this.prisma.music.findUnique({where: {id}});
    }

    //FUNCIONES PARA LA TABLA USERMUSIC
    async userMusic(data: {
        userId: string,
        musicId: string
    }){
        return this.prisma.userMusic.create({ data });
    }

}