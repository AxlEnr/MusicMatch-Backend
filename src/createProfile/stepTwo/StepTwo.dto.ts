import { IsString } from "class-validator";

export class StepTwoDTO{
    @IsString()
    platformName: string;

    @IsString()
    profileLink: string;

    @IsString()
    userId: string;

}