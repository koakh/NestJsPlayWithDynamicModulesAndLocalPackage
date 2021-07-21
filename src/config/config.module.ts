import { DynamicModule, Module } from '@nestjs/common';
import { ConfigController } from './config.controller';
import { ConfigService } from './config.service';
import { CONFIG_OPTIONS } from './constants';
import { ConfigModuleOptions } from './interfaces';


@Module({})
export class ConfigModule {
  static register(options: ConfigModuleOptions): DynamicModule {
    return {
      module: ConfigModule,
      // imports: [UsersService],
      providers: [
        ConfigService,
        // required to be injects from ConfigModule in ConfigService with
        // @Inject(CONFIG_OPTIONS) options: ConfigOptions
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        // UsersService,
      ],
      controllers: [ConfigController],
      exports: [ConfigService],
    };
  }
}
