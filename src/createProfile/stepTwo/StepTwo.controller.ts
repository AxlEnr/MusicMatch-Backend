import { Controller, Post, Get, Body, Param } from "@nestjs/common";
import { StepTwoService } from "./stepTwo.service";
import { StepTwoDTO } from "./stepTwo.dto";

@Controller('api/steptwo')
export class StepTwoController{
    constructor(private readonly stepTwoService: StepTwoService) {}

    @Post('post')
    async createSocialLinks(
        @Body() createSocialLinksDTO: StepTwoDTO
    ){
        return this.stepTwoService.createSocialLinks(createSocialLinksDTO);
    }

    @Get(':id')
    async getSocialLink(@Param('id') id: string){
        return this.stepTwoService.getSocialLinksById(id);
    }
}