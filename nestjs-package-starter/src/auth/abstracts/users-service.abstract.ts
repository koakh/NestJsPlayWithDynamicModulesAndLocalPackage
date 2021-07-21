import { User } from "../types";

export abstract class UserServiceAbstract {
  abstract findOne(username: string) : Promise<User | undefined>;
  abstract login(username: string, password: string): Promise<boolean>
}
