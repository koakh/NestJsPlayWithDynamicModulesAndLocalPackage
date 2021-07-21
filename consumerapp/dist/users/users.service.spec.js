"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const users_service_1 = require("./users.service");
describe('UsersService', () => {
    let service;
    beforeEach(async () => {
        const moduleRef = await testing_1.Test.createTestingModule({
            providers: [users_service_1.UsersService],
        }).compile();
        service = moduleRef.get(users_service_1.UsersService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    it.each `
    name      | returnVal
    ${'john'} | ${{ userId: 1, username: 'john', password: 'changeme' }}
  `('should call findOne for $name and return $returnVal', async ({ name, returnVal }) => {
        expect(await service.findOne(name)).toEqual(returnVal);
    });
});
//# sourceMappingURL=users.service.spec.js.map