import { DynamicModule } from '@nestjs/common';
import { ConfigModuleOptions as AuthModuleOptions } from './interfaces';
export declare class AuthModule {
    static register(options: AuthModuleOptions): DynamicModule;
}
