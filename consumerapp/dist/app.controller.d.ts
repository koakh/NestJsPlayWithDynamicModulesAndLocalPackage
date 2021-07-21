import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Promise<{
        message: string;
    }>;
    getConfig(): Promise<{
        [key: string]: string;
    }>;
}
