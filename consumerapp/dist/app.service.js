"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AppService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_package_starter_1 = require("@koakh/nestjs-package-starter");
let AppService = AppService_1 = class AppService {
    constructor(authService) {
        this.authService = authService;
        common_1.Logger.log(this.authService.getConfigKey('HELLO_MESSAGE'), AppService_1.name);
    }
    async getConfig() {
        return { HELLO_MESSAGE: `hello ${(await this.authService.getConfigKey('HELLO_MESSAGE'))}` };
    }
    async getHello() {
        return { message: `hello ${(await this.authService.getUser('john')).username}` };
    }
};
AppService = AppService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [nestjs_package_starter_1.AuthService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map