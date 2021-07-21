import { UserServiceAbstract, User } from '@koakh/nestjs-package-starter';
export declare class UsersService implements UserServiceAbstract {
    private readonly users;
    private userRoles;
    private adminRoles;
    constructor();
    findOne(username: string): Promise<User | undefined>;
    login(username: string, password: string): Promise<boolean>;
}
