import { NestFactory } from '@nestjs/core';
import 'dotenv/config.js';
import { AppModule } from './app.module.js';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem'),
  };
  const app = await NestFactory.create(AppModule, {
    cors: true,
    httpsOptions,
  });
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
