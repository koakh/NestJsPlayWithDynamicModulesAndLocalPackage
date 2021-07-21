import { AuthService } from '@koakh/nestjs-package-starter';
export declare class AppService {
    private readonly authService;
    constructor(authService: AuthService);
    getConfig(): Promise<{
        [key: string]: string;
    }>;
    getHello(): Promise<{
        message: string;
    }>;
}
