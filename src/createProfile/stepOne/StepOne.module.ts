import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { StepOneController } from "./StepOne.controller";
import { StepOneService } from "./StepOne.service";

@Module({
    imports: [ConfigModule],
    controllers: [StepOneController],
    providers: [StepOneService],
})
export class StepOneModule {}