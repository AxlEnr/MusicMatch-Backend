import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { musicController } from "../music/music.controller";
import { musicService } from "../music/music.service";

@Module(
    {
        imports: [ ConfigModule ],
        controllers: [ musicController ],
        providers: [ musicService ], 
    }
)
export class ArtistModule{}