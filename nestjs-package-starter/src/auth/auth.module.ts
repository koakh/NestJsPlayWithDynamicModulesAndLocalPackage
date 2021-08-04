import { DynamicModule, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AUTH_MODULE_OPTIONS } from './auth.constants';
import { AuthModuleOptions, AuthModuleOptionsAsync } from './interfaces';


@Module({})
export class AuthModule {
  static register(options: AuthModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      providers: [
        AuthService,
        // add useValue provide required to be injected service like in AuthService with
        // @Inject(AUTH_MODULE_OPTIONS) options: AuthModuleOptions
        {
          provide: AUTH_MODULE_OPTIONS,
          useValue: options,
        },
      ],
      controllers: [AuthController],
      exports: [AuthService],
    };
  }

  // TODO not working
  static registerAsync(options: AuthModuleOptionsAsync): DynamicModule {
    return {
      module: AuthModule,
      providers: [
        AuthService,
        // add useValue provide required to be injected service like in AuthService with
        // @Inject(AUTH_MODULE_OPTIONS) options: AuthModuleOptions
        {
          provide: AUTH_MODULE_OPTIONS,
          useValue: options,
        },
      ],
      controllers: [AuthController],
      exports: [AuthService],
    }
  }
}
