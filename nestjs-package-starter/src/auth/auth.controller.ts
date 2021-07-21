import { Body, Controller, Post } from '@nestjs/common';
import { AuthService as AuthService } from './auth.service';
import { LoginDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<{ logged: boolean }> {
    return { logged: await this.authService.login(loginDto) };
  }
}
