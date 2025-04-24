import { IAppItemFullDetail } from 'google-play-scraper';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { AppItemFullDetailDto } from '../dto/app.dto.js';

export interface IApp extends Omit<IAppItemFullDetail, 'updated'> {
  updated: string;
}

export class AppDto extends PartialType(AppItemFullDetailDto) {
  @ApiProperty()
  updated: string;
}
