import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class StepTwoService{
    private prisma = new PrismaClient();

    async createSocialLinks(data: {
        platformName: string,
        profileLink: string,
        userId: string
    }){
        return this.prisma.userSocialLink.create({ data });
    }

    async getSocialLinksById(id: string){
        return this.prisma.userSocialLink.findUnique({where: { id }})
    }
}