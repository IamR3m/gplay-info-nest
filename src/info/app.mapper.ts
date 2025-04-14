// @ts-expect-error No default import
import gplay from 'google-play-scraper';

export class AppMapper {
  static toResponse(app: gplay.IAppItemFullDetail) {
    return {
      ...app,
      updated: new Date(app.updated).toISOString(),
    };
  }
}
