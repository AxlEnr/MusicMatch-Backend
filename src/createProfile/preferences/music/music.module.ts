import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { musicController } from "./music.controller";
import { musicService } from "./music.service";

@Module({
    imports: [ConfigModule],
    controllers: [musicController],
    providers: [musicService],
}) 
export class musicModule {}