import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async save(name: string, password: string, email: string) {
    return this.prisma.user.create({
      data: {
        name,
        password,
        email,
      },
    });
  }

  async findOne(name: string) {
    return this.prisma.user.findUnique({ where: { name } });
  }
}
