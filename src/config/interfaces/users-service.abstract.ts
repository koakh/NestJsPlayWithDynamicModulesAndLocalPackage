import { User } from "../types";

export abstract class UserServiceAbstract {
  abstract findOne(username: string) : Promise<User | undefined>;
}
