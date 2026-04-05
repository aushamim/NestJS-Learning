import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: CreateUserDto): User {
    const newUser: User = {
      id: this.users.length + 1,
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }
}
