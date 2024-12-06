import { Controller, Get, Param, Post } from '@nestjs/common';
import { MatchesService } from './match.service';

@Controller('api/matches')
export class MatchesController {
  constructor(private matchesService: MatchesService) {}

  @Get(':userId')
  async getMatches(@Param('userId') userId: string) {
    const matches = await this.matchesService.findMatchesForUser(userId);
    return { matches };
  }

  @Post('createAll')
  async createMatches() {
    const result = await this.matchesService.createMatches();
    return result;
  }
}
