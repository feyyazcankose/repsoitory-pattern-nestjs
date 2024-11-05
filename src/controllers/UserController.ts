// src/controllers/user.controller.ts

import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
  Inject,
} from '@nestjs/common';
import { User } from '@src/entities/User';
import { IUserService, USER_SERVICE_TOKEN } from '@services/user/IUserService';

@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE_TOKEN) private readonly userService: IUserService,
  ) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<User | null> {
    return this.userService.findById(id);
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: Partial<User>): Promise<User> {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
