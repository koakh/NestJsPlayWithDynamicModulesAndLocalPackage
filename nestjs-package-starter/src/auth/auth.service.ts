import { Inject, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { AUTH_OPTIONS } from './constants';
import { LoginDto } from './dto';
import { AuthModuleOptions, EnvConfig } from './interfaces';
import { User } from './types';

@Injectable()
export class AuthService {
  private readonly envConfig: EnvConfig;

  constructor(
    // provided from ConfigModule
    @Inject(AUTH_OPTIONS)
    private readonly options: AuthModuleOptions,
  ) {    
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(__dirname, '../../', options.config.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  getConfigKey(key: string): string {
    return this.envConfig[key];
  }

  async getUser(username: string): Promise<User> {
    return await this.options.userService.findOne(username);
  }
  
  async login({username, password}: LoginDto): Promise<boolean> {
    return await this.options.userService.login(username, password);
  }  
}
