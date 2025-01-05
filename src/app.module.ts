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



@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    StepOneModule,
    StepTwoModule,
    musicModule
],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  },],
})
export class AppModule {}
