import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InfoController } from './info.controller.js';
import { InfoService } from './info.service.js';

@Module({
  controllers: [InfoController],
  providers: [JwtService, InfoService],
})
export class InfoModule {}
