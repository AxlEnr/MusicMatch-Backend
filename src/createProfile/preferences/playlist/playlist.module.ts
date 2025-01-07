import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { playlistController } from "./playlist.controller";
import { playlistService } from "./playlist.service";

@Module({
    imports: [ ConfigModule ],
    controllers: [ playlistController ],
    providers: [ playlistService ],
}) export class PlaylistModule {}