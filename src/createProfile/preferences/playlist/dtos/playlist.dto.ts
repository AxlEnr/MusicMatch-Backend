import { IsString, IsUrl } from "class-validator";

export class playlistDTO{
    @IsString()
    name: string;
    
    @IsUrl()
    @IsString()
    coverUrl: string;

    @IsString()
    ownerId: string;
}