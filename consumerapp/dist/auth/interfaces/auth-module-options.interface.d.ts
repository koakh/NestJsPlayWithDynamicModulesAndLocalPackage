import { UserServiceAbstract } from "../abstracts/users-service.abstract";
export interface ConfigModuleOptions {
    userService: UserServiceAbstract;
    config: {
        folder: string;
    };
}
