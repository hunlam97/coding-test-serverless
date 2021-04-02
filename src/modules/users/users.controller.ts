import {
  Controller,
  Get,
  Patch,
  Post,
  Body,
  UseGuards,
  Request,
  Response,
  Param,
  Res,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '../../guards/auth.guard';
import { FirebaseService } from '../../providers/firebase/firebase.service';
import { PublicUserDto, UpdateUserDto } from './dto';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller({ path: '/users' })
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private firebaseService: FirebaseService,
  ) {}

  @Get('/ping')
  ping() {
    return 'pong!';
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async getById(
    @Param('id') id: string,
    @Request() req: Request & { currentUser: PublicUserDto },
  ) {
    if (id === 'me') {
      return req.currentUser;
    }
    return this.usersService.getById(id);
  }

  @Post('/signup')
  async signup(
    @Body() { email, password, dob, name }: CreateUserDto,
    @Res() resp: Response,
  ) {
    const firebaseUser = await this.firebaseService.createUser(email, password);
    const publicUser = await this.usersService.create({
      name,
      email,
      dob,
      uid: firebaseUser.uid,
    });
    return publicUser;
  }

  @UseGuards(AuthGuard)
  @Patch('/edit')
  async edit(
    @Req() req: Request & { currentUser: PublicUserDto },
    @Body() body: UpdateUserDto,
  ) {
    return this.usersService.edit(req.currentUser.uid, body);
  }
}
