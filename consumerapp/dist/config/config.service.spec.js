"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const config_service_1 = require("./config.service");
const constants_1 = require("./constants");
jest.mock('dotenv');
jest.mock('fs');
describe('ConfigService', () => {
    let service;
    beforeEach(async () => {
        const moduleRef = await testing_1.Test.createTestingModule({
            providers: [
                config_service_1.ConfigService,
                {
                    provide: constants_1.CONFIG_OPTIONS,
                    useValue: {
                        folder: 'config',
                    },
                },
            ],
        }).compile();
        service = moduleRef.get(config_service_1.ConfigService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=config.service.spec.js.map