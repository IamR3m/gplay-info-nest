import { Injectable, NotFoundException } from "@nestjs/common";
// @ts-expect-error No default import
import gplay from 'google-play-scraper';
import { AppMapper } from './app.mapper.js';

@Injectable()
export class InfoService {
  async getApp(appId: string, country?: string, lang?: string) {
    try {
      const app = await gplay.app({
        appId,
        country: country || "ru",
        lang: lang || "ru"
      });
      return AppMapper.toResponse(app);
    } catch (e) {
      if (e.status === 404) throw new NotFoundException('App not found');
    }
  }
}
