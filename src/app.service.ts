import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  private helloMessage: string;

  constructor(private readonly configService: ConfigService) {
    // this.helloMessage = configService.get('HELLO_MESSAGE');
  }

  getHello(): string {
    return this.helloMessage;
  }

  async getJohn(): Promise<any> {
    return await this.configService.getUser('john');
  }
}
