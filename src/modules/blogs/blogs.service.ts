import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogsEntity } from './blogs.entity';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogsEntity)
    private blogsResitory: Repository<BlogsEntity>,
  ) {}

  ping = async () => {
    return this.blogsResitory.findOne();
  };
}
