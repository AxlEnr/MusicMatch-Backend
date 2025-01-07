import { Controller, Post, Body } from "@nestjs/common";
import { albumService } from "./album.service";
import { albumDTO } from "./dtos/album.dto";
import { userAlbumDTO } from "./dtos/useralbum.dto";

@Controller('api/album')
export class albumController{
    constructor(private readonly albumService: albumService) {}

    //Controller para album
    @Post('post')
    async createAlbum(
        @Body() albumDTO: albumDTO
    ){
        return this.albumService.createAlbum(albumDTO);
    }

    //Controller para useralbum
    @Post('preference')
    async userAlbum(
        @Body() userAlbumDTO: userAlbumDTO
    ){
        return this.albumService.userAlbum(userAlbumDTO);
    }
}