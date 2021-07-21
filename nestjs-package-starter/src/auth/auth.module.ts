import { DynamicModule, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AUTH_OPTIONS } from './constants';
import { ConfigModuleOptions as AuthModuleOptions } from './interfaces';


@Module({})
export class AuthModule {
  static register(options: AuthModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      providers: [
        AuthService,
        // required to be injects from ConfigModule in AuthService with
        // @Inject(AUTH_OPTIONS) options: ConfigOptions
        {
          provide: AUTH_OPTIONS,
          useValue: options,
        },
      ],
      controllers: [AuthController],
      exports: [AuthService],
    };
  }
}
