import { Module } from '@nestjs/common';
import { ProfileController } from './saveProfile.controller';
import { ProfileService } from './saveProfile.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
