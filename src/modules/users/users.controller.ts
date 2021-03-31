import { Controller, Get, Patch, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller({ path: '/users' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:firebaseId')
  getById(@Param('firebaseId') firebaseId: string) {
    return this.usersService.ping();
  }

  @Post('/create/:firebaseId')
  create(@Param('firebaseId') firebaseId: string) {}

  @Patch('/edit/:firebaseId')
  edit(@Param('firebaseId') firebaseId: string) {}
}
