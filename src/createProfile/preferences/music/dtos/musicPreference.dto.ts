import { IsString } from "class-validator";

export class userMusicDTO{
    @IsString()
    userId: string;

    @IsString()
    musicId: string;
}