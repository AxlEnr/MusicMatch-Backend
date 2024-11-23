import { Controller, Get, Res, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import axios from 'axios';
import * as crypto from 'crypto'; // Para generar el estado

@Controller('auth/spotify')
export class AuthController {
  constructor(private readonly configService: ConfigService) {}

  // Endpoint para redirigir a Spotify Login
  @Get('login')
  redirectToSpotify(@Res() res: Response) {
    const SPOTIFY_CLIENT_ID = this.configService.get<string>('SPOTIFY_CLIENT_ID');
    const REDIRECT_URI = this.configService.get<string>('REDIRECT_URI');
    const scope = 'user-library-read user-read-private user-top-read';
  
    const state = crypto.randomBytes(16).toString('hex'); // Generar estado único
    res.cookie('spotify_auth_state', state, { httpOnly: true });
  
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
      REDIRECT_URI,
    )}&scope=${encodeURIComponent(scope)}&state=${state}`;
  
    res.redirect(authUrl);
  }

  @Post('token')
  async getSpotifyToken(@Body('code') code: string) {
    const SPOTIFY_CLIENT_ID = this.configService.get<string>('SPOTIFY_CLIENT_ID');
    const SPOTIFY_CLIENT_SECRET = this.configService.get<string>('SPOTIFY_CLIENT_SECRET');
    const REDIRECT_URI = this.configService.get<string>('REDIRECT_URI');

    try {
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        new URLSearchParams({
          grant_type: 'authorization_code',
          code,
          redirect_uri: REDIRECT_URI,
        }),
        {
          headers: {
            Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        'Error obteniendo el token de Spotify',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('profile')
  async getSpotifyProfile(@Body('accessToken') accessToken: string) {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new HttpException(
        'Error obteniendo el perfil de Spotify',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
