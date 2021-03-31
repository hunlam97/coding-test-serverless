import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersResitory: Repository<UsersEntity>,
  ) {}

  ping = async () => {
    return this.usersResitory.findOne();
  };
}
