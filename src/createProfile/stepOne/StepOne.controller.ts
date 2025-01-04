import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { StepOneService } from './StepOne.service';
import { CreateUserDto } from './StepOne.dto';

@Controller('api/stepOne')
export class StepOneController {
  constructor(private readonly stepOneService: StepOneService) {}

  @Post('post')
  async createDataUser(
    @Body() createDataUserDTO: CreateUserDto
  ) {
    return this.stepOneService.createDataUser(createDataUserDTO);
  }

  @Get(':email')
  async getDataUser(@Param('email') email: string) {
    return this.stepOneService.getDataUserByEmail(email);
  }
}
