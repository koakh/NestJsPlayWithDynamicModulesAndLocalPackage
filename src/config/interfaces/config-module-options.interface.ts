import { UserServiceAbstract } from "./users-service.abstract";

export interface ConfigModuleOptions {
  userService: UserServiceAbstract;
  // folder: string;
  // hello: () => string;
  // findOne: (username: string) => Promise<User | undefined>;
}