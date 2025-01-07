import { IsDate, IsString } from "class-validator";

export class matchDTO{
    @IsString()
    user1Id: string;

    @IsString()
    user2Id: string;

    @IsDate()
    matchDate: Date;
}