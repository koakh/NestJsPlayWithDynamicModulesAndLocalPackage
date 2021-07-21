import { User } from "../types";
export declare abstract class UserServiceAbstract {
    abstract findOne(username: string): Promise<User | undefined>;
}
