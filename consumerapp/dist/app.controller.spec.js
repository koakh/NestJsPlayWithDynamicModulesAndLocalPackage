"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const appServiceMock = {
    getHello: jest.fn().mockImplementation(() => 'Hello World!'),
};
describe('AppController', () => {
    let appController;
    let appService;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [app_controller_1.AppController],
            providers: [
                {
                    provide: app_service_1.AppService,
                    useValue: appServiceMock,
                },
            ],
        }).compile();
        appService = app.get(app_service_1.AppService);
        appController = app.get(app_controller_1.AppController);
    });
    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
            expect(appService.getHello).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=app.controller.spec.js.map