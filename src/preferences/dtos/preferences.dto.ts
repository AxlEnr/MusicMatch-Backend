import { IsString, IsOptional } from 'class-validator';

export class PreferencesDto {
    @IsString()
    userID: string;
  
    @IsString()
    musicID: string;
  
    @IsString()
    artistID: string;
  
    @IsOptional()
    @IsString()
    preferenceType: string = 'track';  // Por defecto "track"
}
