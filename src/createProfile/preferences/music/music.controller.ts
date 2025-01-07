import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { musicService } from "./music.service";
import { musicDTO } from "./dtos/music.dto";
import { userMusicDTO } from "./dtos/musicPreference.dto";


@Controller('api/music')
export class musicController{
    constructor(private readonly musicService: musicService) {}


    //CONTROLLERS PARA LA TABLA MUSIC
    @Post('post')
    async createMusic(
        @Body() musicDTO: musicDTO
    ){
        return this.musicService.createMusic(musicDTO);
    }

    @Get(':id')
    async getMusicById(@Param(':id') id: string){
        return this.musicService.getMusicById(id);
    }

    //CONTROLLERS PARA LA TABLA USERMUSIC
    @Post('preference')
    async userMusic(
        @Body() userMusicDTO: userMusicDTO
    ){
        return this.musicService.userMusic(userMusicDTO);
    }

}