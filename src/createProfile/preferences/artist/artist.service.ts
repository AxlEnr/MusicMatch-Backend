import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class artistService{
    private prisma = new PrismaClient();
    
    //Services para artist
    async createArtist(data: {
        artistName: string,
    }){
        return this.prisma.artist.create({ data });
    }

    async getArtistById(id: string){
        return this.prisma.artist.findUnique({where: {id} });
    }

    //Services para userartist
    async userArtist(data: {
        userId: string,
        artistId: string,
    }){
        return this.prisma.userArtist.create({ data });
    }
}