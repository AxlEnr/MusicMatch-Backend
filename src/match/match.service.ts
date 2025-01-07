import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class matchService{
    private prisma = new PrismaClient();

    //Services para match
    async createMatch(
        data: {
            user1Id: string,
            user2Id: string,
            matchDate: Date,
        }
    ){
        return this.prisma.match.create({ data });
    }

    //Services para matchdetail
    async matchDetail(data:{
        matchId: string,
        musicId: string,
        artistId: string,
    }){
        return this.prisma.matchDetail.create({ data });
    }
}