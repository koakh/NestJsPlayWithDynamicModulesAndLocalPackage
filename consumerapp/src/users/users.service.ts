import { Injectable } from '@nestjs/common';
import { UserServiceAbstract, User } from '@koakh/nestjs-package-starter';
import { Roles } from './enums';

@Injectable()
export class UsersService implements UserServiceAbstract {
  private readonly users: User[];
  private userRoles = [Roles.USER_ROLE];
  private adminRoles = [Roles.USER_ADMIN];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
        roles: [...this.userRoles, ...this.adminRoles]
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
        roles: [...this.userRoles]
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        roles: [...this.userRoles]
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async login(username: string, password: string): Promise<boolean> {
    const findIndex = this.users.findIndex(user => user.username === username && user.password === password);
    return findIndex >= 0;
  }
}
