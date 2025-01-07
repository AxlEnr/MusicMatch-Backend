import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { albumController } from "./album.controller";
import { albumService } from "./album.service";

@Module({
    imports: [ ConfigModule ],
    controllers: [ albumController ],
    providers: [ albumService ],
})
export class AlbumModule {}