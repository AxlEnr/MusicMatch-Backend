import { IsString } from "class-validator";

export class artistDTO{
    @IsString()
    artistName: string;
}