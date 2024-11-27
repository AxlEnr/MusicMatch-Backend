import { Module } from '@nestjs/common';
import { ProfileController } from './saveProfile.controller';
import { ProfileService } from './saveProfile.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
