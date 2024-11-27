import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProfileService } from './saveProfile.service';
import { createProfileDto } from './createProfile/createProfile.dto'; 

@Controller('api/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createProfile(@Body() createProfileDto: createProfileDto) {
    return this.profileService.createProfile(createProfileDto); 
  }
}
