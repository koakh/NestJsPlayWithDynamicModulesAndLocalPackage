import { LoginDto } from './dto';
import { ConfigModuleOptions } from './interfaces';
import { User } from './types';
export declare class ConfigService {
    private readonly options;
    private readonly envConfig;
    constructor(options: ConfigModuleOptions);
    get(key: string): string;
    getUser(username: string): Promise<User>;
    login({ username, password }: LoginDto): Promise<boolean>;
}
