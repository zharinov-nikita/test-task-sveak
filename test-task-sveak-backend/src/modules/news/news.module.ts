import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';

@Module({
  controllers: [NewsController],
  providers: [],
})
export class NewsModule {}
