import { AuthService as AuthService } from './auth.service';
import { LoginDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        logged: boolean;
    }>;
}
