import { IsString, IsUrl } from "class-validator";

export class StepTwoDTO{
    @IsString()
    platformName: string;

    @IsString()
    @IsUrl()
    profileLink: string;

    @IsString()
    userId: string;

}