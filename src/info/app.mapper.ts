// @ts-expect-error No default import
import gplay from 'google-play-scraper';
import { AppItemFullDetailDto } from "./dto/AppItemFullDetailDto.js";

export class AppMapper {
  static toResponse(app: gplay.IAppItemFullDetail): AppItemFullDetailDto {
    return {
      ...app,
      updated: new Date(app.updated).toISOString(),
    };
  }
}
