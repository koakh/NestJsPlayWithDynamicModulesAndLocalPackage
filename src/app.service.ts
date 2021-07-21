import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {

  constructor(private readonly configService: ConfigService) { }

  async getHello(): Promise<{ message: string }> {
    return { message: `hello ${(await this.configService.getUser('john')).username}` };
  }
}
