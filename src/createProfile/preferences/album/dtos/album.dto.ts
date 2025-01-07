import { IsString } from "class-validator";

export class albumDTO{
    @IsString()
    name: string;
    
    @IsString()
    artistId: string;
}