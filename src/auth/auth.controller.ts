import { Controller, Get, Post, Body } from '@nestjs/common';


@Controller('users')
export class UsersController {
  @Get()
  getAll(): string {
    return 'List of users';
  }

  @Post()
  async createUser(@Body() createUserDto: any): Promise<string> {
    return 'User created';
  }
}