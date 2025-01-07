import { Body, Controller, Post } from "@nestjs/common";
import { playlistService } from "./playlist.service";
import { playlistDTO } from "./dtos/playlist.dto";
import { userPlaylistDTO } from "./dtos/userplaylist.dto";

@Controller('api/playlist')
export class playlistController{
    constructor(private readonly playlistService : playlistService) {}

    //Controller para playlist
    @Post('post')
    async createPlaylist(
        @Body() playlistDTO: playlistDTO
    ){
        return this.playlistService.createPlaylist(playlistDTO);
    }

    //Controller para userPlaylist
    @Post('preference')
    async userPlaylist(
        @Body() userPlaylistDTO: userPlaylistDTO
    ){
        return this.playlistService.userPlaylist(userPlaylistDTO);
    }
}