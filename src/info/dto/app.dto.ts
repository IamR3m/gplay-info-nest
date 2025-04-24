import { IAppItemFullDetail } from "google-play-scraper";

export class AppItemFullDetailDto {
  constructor(init: IAppItemFullDetail) {
    Object.assign(this, init);
  }
}
