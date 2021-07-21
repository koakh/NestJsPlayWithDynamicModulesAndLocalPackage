import { DynamicModule } from '@nestjs/common';
import { ConfigModuleOptions } from './interfaces';
export declare class ConfigModule {
    static register(options: ConfigModuleOptions): DynamicModule;
}
