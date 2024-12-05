import { IsString} from 'class-validator';

export class MusicDto {
  @IsString()
  songName: string;
}
