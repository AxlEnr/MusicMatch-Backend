import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { StepOneModule } from './createProfile/stepOne/StepOne.module';
import { StepTwoModule } from './createProfile/stepTwo/stepTwo.module';
import { musicModule } from './createProfile/preferences/music/music.module';
import { ArtistModule } from './createProfile/preferences/artist/artist.module';
import { AlbumModule } from './createProfile/preferences/album/album.module';
import { PlaylistModule } from './createProfile/preferences/playlist/playlist.module';



@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    StepOneModule,
    StepTwoModule,
    musicModule,
    ArtistModule,
    AlbumModule,
    PlaylistModule
],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  },],
})
export class AppModule {}
