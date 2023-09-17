import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService();
  const PORT = configService.get('API_PORT');
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: configService.get('API_CORS') });
  await app.listen(PORT);
}
bootstrap();
