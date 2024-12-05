import { Module } from '@nestjs/common';
import { ArtistController } from './artists.controller';
import { ArtistService } from './artists.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ArtistController],
  providers: [ArtistService],
})
export class ArtistModule {}
