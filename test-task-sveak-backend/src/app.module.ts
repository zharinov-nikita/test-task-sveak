import { Module } from '@nestjs/common';
import { NewsModule } from './modules';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NewsModule,
  ],
})
export class AppModule {}
