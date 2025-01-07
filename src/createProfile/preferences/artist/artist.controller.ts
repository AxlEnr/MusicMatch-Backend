import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { artistService } from "./artist.service";
import { artistDTO } from "./dtos/artist.dto";
import { userArtistDTO } from "./dtos/artitstUser.dto";

@Controller('api/artist')
export class artistController{
    constructor(private readonly artistService: artistService) {}


    //Controllers para artist
    @Post('post')
    async createArtist(
        @Body() artistDTO: artistDTO
    ){
        return this.artistService.createArtist(artistDTO);
    }

    @Get(':id')
    async getArtistById(@Param('id') id: string){
        return this.artistService.getArtistById(id);
    }

    //Controllers para userartist
    @Post('preference')
    async userArtist(
        @Body() userArtistDTO: userArtistDTO
    ){
        return this.artistService.userArtist(userArtistDTO);
    }
}