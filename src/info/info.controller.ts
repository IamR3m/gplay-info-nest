import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { InfoService } from './info.service.js';
import { AppItemFullDetailDto } from './dto/AppItemFullDetailDto.js';

@Controller('info')
@ApiSecurity('bearer')
export class InfoController {
  constructor(private infoService: InfoService) {}

  @Get(':appId')
  @ApiOperation({
    summary:
      'Retrieves application information by appId from Google Play Store',
  })
  @ApiParam({ name: 'appId', required: true, description: 'Application ID' })
  @ApiQuery({
    name: 'country',
    required: false,
    description: '2-letter country code of market to retrieve info from',
    default: 'ru',
  })
  @ApiQuery({
    name: 'lang',
    required: false,
    description: '2-letter language code of returned info',
    default: 'ru',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: AppItemFullDetailDto,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async getApp(
    @Param('appId') appId: string,
    @Query('country') country?: string,
    @Query('lang') lang?: string,
  ) {
    return await this.infoService.getApp(appId, country, lang);
  }
}
