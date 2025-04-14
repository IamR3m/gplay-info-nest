import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(username: string, password: string, email: string) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.usersService.save(
        username,
        hashedPassword,
        email,
      );
      return this.generateAuthResponse(user);
    } catch {
      throw new BadRequestException();
    }
  }

  async signIn(username: string, password: string) {
    const user = await this.usersService.findOne(username);
    const match = bcrypt.compare(password, user?.password);
    if (!match) throw new UnauthorizedException();
    return this.generateAuthResponse(user);
  }

  private async generateAuthResponse(user: User) {
    const payload = { username: user.name, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
