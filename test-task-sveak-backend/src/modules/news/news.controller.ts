import {
  Controller,
  Get,
  Query,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { ApiKeyGuard } from '../../guards';
import { CommentSchema, NewsSchema } from './schemas';

@UseGuards(ApiKeyGuard)
@Controller('news')
export class NewsController {
  private hackerNewsApi: string;

  constructor(private configService: ConfigService) {
    this.hackerNewsApi = this.configService.get('HACKER_NEWS_API');
  }

  @Get('getAllTopNewsIds')
  async getAllTopNewsIds(): Promise<number[]> {
    return (await axios.get<number[]>(`${this.hackerNewsApi}topstories.json`))
      .data;
  }

  @Get('getAllNewNewsIds')
  async getAllNewNewsIds(): Promise<number[]> {
    return (await axios.get<number[]>(`${this.hackerNewsApi}newstories.json`))
      .data;
  }

  @Get('getByIdNews')
  async getByIdNews(@Query('id') id: string): Promise<NewsSchema> {
    if (!id) {
      throw new BadRequestException('Query parameter "id" is required');
    }

    return (
      await axios.get<NewsSchema>(`${this.hackerNewsApi}/item/${id}.json`)
    ).data;
  }

  @Get('getByIdComment')
  async getByIdComment(@Query('id') id: string): Promise<CommentSchema> {
    if (!id) {
      throw new BadRequestException('Query parameter "id" is required');
    }

    return (
      await axios.get<CommentSchema>(`${this.hackerNewsApi}/item/${id}.json`)
    ).data;
  }
}
