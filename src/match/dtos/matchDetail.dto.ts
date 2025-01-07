import { IsString } from "class-validator";

export class matchDetailDTO{
    @IsString()
    matchId: string;

    @IsString()
    artistId: string;

    @IsString()
    musicId: string;
}