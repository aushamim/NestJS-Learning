import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users: { id: number; name: string }[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
