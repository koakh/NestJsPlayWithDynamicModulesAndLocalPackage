"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const auth_service_1 = require("./auth.service");
const constants_1 = require("./constants");
jest.mock('dotenv');
jest.mock('fs');
describe('AuthService', () => {
    let service;
    beforeEach(async () => {
        const moduleRef = await testing_1.Test.createTestingModule({
            providers: [
                auth_service_1.AuthService,
                {
                    provide: constants_1.AUTH_OPTIONS,
                    useValue: {
                        folder: 'config',
                    },
                },
            ],
        }).compile();
        service = moduleRef.get(auth_service_1.AuthService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=auth.service.spec.js.map