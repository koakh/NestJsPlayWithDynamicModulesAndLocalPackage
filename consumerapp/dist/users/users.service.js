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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("./enums");
let UsersService = class UsersService {
    constructor() {
        this.userRoles = [enums_1.Roles.USER_ROLE];
        this.adminRoles = [enums_1.Roles.USER_ADMIN];
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
                roles: [...this.userRoles, ...this.adminRoles]
            },
            {
                userId: 2,
                username: 'chris',
                password: 'secret',
                roles: [...this.userRoles]
            },
            {
                userId: 3,
                username: 'maria',
                password: 'guess',
                roles: [...this.userRoles]
            },
        ];
    }
    async findOne(username) {
        return this.users.find(user => user.username === username);
    }
    async login(username, password) {
        const findIndex = this.users.findIndex(user => user.username === username && user.password === password);
        return findIndex >= 0;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map