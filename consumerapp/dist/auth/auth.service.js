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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const constants_1 = require("./constants");
let AuthService = class AuthService {
    constructor(options) {
        this.options = options;
        const filePath = `${process.env.NODE_ENV || 'development'}.env`;
        const envFile = path.resolve(__dirname, '../../', options.config.folder, filePath);
        this.envConfig = dotenv.parse(fs.readFileSync(envFile));
    }
    getConfigKey(key) {
        return this.envConfig[key];
    }
    async getUser(username) {
        return await this.options.userService.findOne(username);
    }
    async login({ username, password }) {
        return await this.options.userService.login(username, password);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.AUTH_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map