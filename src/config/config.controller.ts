import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService } from './config.service';
import { LoginDto } from './dto';

@Controller('auth')
export class ConfigController {
  constructor(
    private readonly configService: ConfigService
  ) { }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<{ logged: boolean }> {
    return { logged: await this.configService.login(loginDto) };
  }
}
