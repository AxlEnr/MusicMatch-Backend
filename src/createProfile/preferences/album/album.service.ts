import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class albumService{
    private prisma = new PrismaClient();

    //Services para album
    async createAlbum(data: {
        name: string,
        artistId: string,
    }){
        return this.prisma.album.create({ data });
    }

    //Services para userAlbum
    async userAlbum(data: {
        userId: string,
        albumId: string,
    }){
        return this.prisma.userAlbum.create({ data });
    }
}