import { IsString } from "class-validator";

export class userArtistDTO{
    @IsString()
    userId: string;

    @IsString()
    artistId: string;
}