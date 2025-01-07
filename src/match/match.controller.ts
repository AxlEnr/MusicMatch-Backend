import { Body, Controller, Post } from "@nestjs/common";
import { matchService } from "./match.service";
import { matchDTO } from "./dtos/match.dto";
import { matchDetailDTO } from "./dtos/matchDetail.dto";

@Controller('api/match')
export class matchController{
    constructor(private readonly matchService: matchService) {}

    @Post('post')
    async createMatch(
        @Body() matchDTO: matchDTO
    ){
        return this.matchService.createMatch(matchDTO);
    }

    //CONTROLLER PARA MATCHDETAIL
    @Post('detail')
    async matchDetail(
        @Body() matchDetailDTO: matchDetailDTO
    ){
        return this.matchService.matchDetail(matchDetailDTO);
    }
}