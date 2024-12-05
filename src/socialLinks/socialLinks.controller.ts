import { Controller, Post, Body} from '@nestjs/common';
import { SocialLinksService } from './socialLinks.service';
import { SocialLinksDto } from './dtos/socialLinks.dto';

@Controller('api/links')
export class SocialLinksController {
  constructor(private readonly socialLinksService: SocialLinksService) {}

  @Post('save')
  async createsocialLinks(@Body() socialLinksDto: SocialLinksDto) {
    const user = await this.socialLinksService.createsocialLinks(socialLinksDto);
    return {
      message: 'Redes sociales creadas con éxito',
      data: user,
    };
  }
}

