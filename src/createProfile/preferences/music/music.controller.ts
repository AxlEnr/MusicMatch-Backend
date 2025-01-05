import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { musicService } from "./music.service";
import { musicDTO } from "./music.dto";

@Controller('api/music')
export class musicController{
    constructor(private readonly musicService: musicService) {}

    @Post('post')
    async userMusic(
        @Body() musicDTO: musicDTO
    ){
        return this.musicService.musicPreference(musicDTO);
    }

    @Get(':id')
    async getMusicById(@Param(':id') id: string){
        return this.musicService.getMusicById(id);
    }

}