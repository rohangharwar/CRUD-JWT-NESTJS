import { Injectable } from '@nestjs/common';
import { User } from './user.schema'; // Adjust import based on your schema

@Injectable()
export class UsersRepository {
  private users: User[] = []; // Example in-memory storage

  async createUser(user: Partial<User>): Promise<User> {
    const newUser = { ...user, id: Date.now().toString() } as User;
    this.users.push(newUser);
    return newUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}