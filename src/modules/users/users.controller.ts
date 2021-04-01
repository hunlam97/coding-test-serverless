import {
  Controller,
  Get,
  Patch,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '../../guards/auth.guard';
import { PublicUserDto, UpdateUserDto } from './dto';
import { UsersService } from './users.service';

@Controller({ path: '/users' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get('/ping')
  ping(@Request() req: Express.Request & { currentUser: PublicUserDto }) {
    return req.currentUser;
  }

  @UseGuards(AuthGuard)
  @Get('/me')
  getById(@Request() req: Express.Request & { currentUser: PublicUserDto }) {
    return req.currentUser;
  }

  @Post('/create')
  create(@Body() body: PublicUserDto) {}

  @UseGuards(AuthGuard)
  @Patch('/edit')
  edit(
    @Request() req: Express.Request & { currentUser: PublicUserDto },
    @Body() body: UpdateUserDto,
  ) {
    return this.usersService.edit(req.currentUser.firebaseId, body);
  }
}
