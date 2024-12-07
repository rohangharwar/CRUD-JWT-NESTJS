import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(dto: CreateUserDto): Promise<any> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = await this.usersRepository.createUser({
      ...dto,
      password: hashedPassword,
    });
    return { ...user.toObject(), password: undefined }; // Omit password
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findByEmail(email);
  }

  async getAllUsers() {
    return await this.usersRepository.getAllUsers();
  }
}