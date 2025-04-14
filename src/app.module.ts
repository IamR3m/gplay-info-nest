import { Module } from '@nestjs/common';
import { InfoModule } from './info/info.module.js';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';

@Module({
  imports: [AuthModule, InfoModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
