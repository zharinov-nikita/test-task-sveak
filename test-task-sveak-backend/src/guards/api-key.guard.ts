import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const apiKeyClient = req.headers['api-key'];

    if (!apiKeyClient) {
      throw new UnauthorizedException('API Key is missing');
    }

    const apiKeyServer = this.configService.get('API_KEY');
    const isValidApiKey = apiKeyClient === apiKeyServer;

    if (!isValidApiKey) {
      throw new UnauthorizedException('Invalid API Key');
    }

    return true;
  }
}
