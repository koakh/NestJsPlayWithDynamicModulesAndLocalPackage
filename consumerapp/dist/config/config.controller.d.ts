import { ConfigService } from './config.service';
import { LoginDto } from './dto';
export declare class ConfigController {
    private readonly configService;
    constructor(configService: ConfigService);
    login(loginDto: LoginDto): Promise<{
        logged: boolean;
    }>;
}
