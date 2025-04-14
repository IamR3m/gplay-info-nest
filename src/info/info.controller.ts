import { Controller, Get, Param, Query } from '@nestjs/common';
import { InfoService } from './info.service.js';

@Controller('info')
export class InfoController {
  constructor(private infoService: InfoService) {}

  @Get(':appId')
  async getApp(
    @Param('appId') appId: string,
    @Query('country') country?: string,
    @Query('lang') lang?: string,
  ) {
    return await this.infoService.getApp(appId, country, lang);
  }
}
