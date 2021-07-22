import { UserServiceAbstract } from "../abstracts/users-service.abstract";

export interface AuthModuleOptions {
  userService: UserServiceAbstract;
  config: {
    folder: string
  }
}