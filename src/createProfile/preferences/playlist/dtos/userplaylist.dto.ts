import { IsString } from "class-validator";

export class userPlaylistDTO{
    @IsString()
    userId: string;

    @IsString()
    playlistId: string;
}