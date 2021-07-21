import { Injectable, Logger } from '@nestjs/common';
import { AuthService } from '@koakh/nestjs-package-starter';

@Injectable()
export class AppService {

  constructor(private readonly authService: AuthService) {
    Logger.log(this.authService.getConfigKey('HELLO_MESSAGE'), AppService.name);
  }

  async getConfig(): Promise<{ [key: string]: string }> {
    return { HELLO_MESSAGE: `hello ${(await this.authService.getConfigKey('HELLO_MESSAGE'))}` };
  }

  async getHello(): Promise<{ message: string }> {
    return { message: `hello ${(await this.authService.getUser('john')).username}` };
  }
}
