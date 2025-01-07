import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class playlistService{
    private prisma = new PrismaClient();

    //Services para playlist
    async createPlaylist(data: {
        name: string,
        coverUrl: string,
        ownerId: string,
    }){
        return this.prisma.playlist.create({ data });
    }

    //Services para userPlaylist
    async userPlaylist(
        data: {
            userId: string,
            playlistId: string,
        }
    ) {
        return this.prisma.userPlaylist.create({ data });
    }
}