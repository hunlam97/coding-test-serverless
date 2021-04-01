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

  getById = async (firebaseId: string) => {
    return this.usersResitory.findByIds([firebaseId]);
  };

  create(body: PublicUserDto) {
    return this.usersResitory.create(body);
  }

  edit(firebaseId: string, body: UpdateUserDto) {
    return this.usersResitory.update({ firebaseId }, body);
  }
}
