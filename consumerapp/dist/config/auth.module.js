"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const constants_1 = require("./constants");
let AuthModule = AuthModule_1 = class AuthModule {
    static register(options) {
        return {
            module: AuthModule_1,
            providers: [
                auth_service_1.AuthService,
                {
                    provide: constants_1.AUTH_OPTIONS,
                    useValue: options,
                },
            ],
            controllers: [auth_controller_1.AuthController],
            exports: [auth_service_1.AuthService],
        };
    }
};
AuthModule = AuthModule_1 = __decorate([
    common_1.Module({})
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map