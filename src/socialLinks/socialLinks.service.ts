import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SocialLinksDto } from './dtos/socialLinks.dto';

@Injectable()
export class SocialLinksService {
  constructor(private readonly prisma: PrismaService) {}

  async createsocialLinks(socialLinksDto: SocialLinksDto) {
    const userSocialLink = await this.prisma.userSocialLink.create({
      data: {
        ...socialLinksDto,
      },
    });
    return userSocialLink;
  }

  async getsocialLinks() {
    return this.prisma.userSocialLink.findMany();
  }
}

