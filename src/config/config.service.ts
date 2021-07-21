import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from './constants';
import { ConfigModuleOptions, EnvConfig } from './interfaces';
import { User } from './types';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;
  // private readonly findOne: (username: string) => Promise<User | undefined>;

  constructor(
    // provided from ConfigModule
    @Inject(CONFIG_OPTIONS)
    private readonly options: ConfigModuleOptions,
    // @Inject(USERS_SERVICE)
    // private readonly usersService: UsersService,
  ) {    
    // this.findOne = options.findOne;
    // const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    // const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    // this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  async getUser(username: string): Promise<any> {
    return await this.options.userService.findOne(username);
  }
}
