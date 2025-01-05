import { IsString } from "class-validator";

export class musicDTO{
    @IsString()
    songName: string;
    
    @IsString()
    artistId: string;

    @IsString()
    userId: string;
}