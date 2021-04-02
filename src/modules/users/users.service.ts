import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FirebaseService } from '../../providers/firebase/firebase.service';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { PublicUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersResitory: Repository<UsersEntity>,

    private firebaseService: FirebaseService,
  ) {}

  getById = async (uid: string) => {
    return (await this.usersResitory.findByIds([uid]))[0];
  };

  create = async (body: Omit<PublicUserDto, 'isAdmin' | 'isActive'>) => {
    await this.usersResitory.insert(body);
    return this.getById(body.uid);
  };

  edit = (uid: string, body: UpdateUserDto) => {
    return this.usersResitory.update({ uid }, body);
  };
}
