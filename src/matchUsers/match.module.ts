import { PrismaModule } from "src/prisma/prisma.module";
import { MatchesController } from "./match.controller";
import { MatchesService } from "./match.service";
import { Module } from "@nestjs/common";

@Module ({
    imports: [PrismaModule],
    controllers: [MatchesController],
    providers: [MatchesService],
})
export class MatchModule {}