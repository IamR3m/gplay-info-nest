import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiSecurity } from "@nestjs/swagger";

import { AuthService } from './auth.service.js';
import { SkipAuth } from './decorators/skip-auth.decorator.js';
import { SignInDto } from './dto/sign-in.dto.js';
import { SignUpDto } from './dto/sign-up.dto.js';
import { Profile } from './entities/profile.entity.js';
import { Token } from './entities/token.entity.js';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @SkipAuth()
  @ApiOperation({ summary: 'Registers a new user' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Token })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @HttpCode(HttpStatus.OK)
  @Post('sign-up')
  async signUp(@Body() body: SignUpDto) {
    return this.authService.signUp(body.username, body.password, body.email);
  }

  @SkipAuth()
  @ApiOperation({ summary: 'Authenticates an existing user' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Token })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Get('profile')
  @ApiOperation({ summary: 'Shows current user profile' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Profile })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized'})
  @ApiBearerAuth()
  @ApiSecurity('bearer')
  getProfile(@Request() req) {
    return req.user;
  }
}
