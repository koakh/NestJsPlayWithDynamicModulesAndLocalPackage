import { Injectable } from '@nestjs/common';
import { UserServiceAbstract } from '../config/abstracts';

export type User = any;

@Injectable()
export class UsersService implements UserServiceAbstract {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
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
