import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { StepTwoController } from "./stepTwo.controller";
import { StepTwoService } from "./stepTwo.service";

@Module({
    imports: [ConfigModule],
    controllers: [StepTwoController],
    providers: [StepTwoService],
})
export class StepTwoModule {}
