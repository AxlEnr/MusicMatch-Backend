import { IsString } from "class-validator";

export class userAlbumDTO{
    @IsString()
    userId: string;

    @IsString()
    albumId: string;
}