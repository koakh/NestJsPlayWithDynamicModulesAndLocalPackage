import { LoginDto } from './dto';
import { ConfigModuleOptions } from './interfaces';
import { User } from './types';
export declare class AuthService {
    private readonly options;
    private readonly envConfig;
    constructor(options: ConfigModuleOptions);
    getConfigKey(key: string): string;
    getUser(username: string): Promise<User>;
    login({ username, password }: LoginDto): Promise<boolean>;
}
