import { Module } from '@nestjs/common';
import { SocialLinksController } from './socialLinks.controller';
import { SocialLinksService } from './socialLinks.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SocialLinksController],
  providers: [SocialLinksService ],
})
export class SocialLinksModule {}
