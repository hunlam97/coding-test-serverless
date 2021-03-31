import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.entity';
import { UsersService } from './users.service';

@Module({
  imports: [UsersRepository],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
