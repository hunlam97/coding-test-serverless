import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FirebaseService } from '../../providers/firebase/firebase.service';
import { Repository } from 'typeorm';
import { BlogsEntity } from './blogs.entity';
import { CreateBlogDto, UpdateBlogDto } from './dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogsEntity)
    private blogsResitory: Repository<BlogsEntity>,

    private firebaseService: FirebaseService,
  ) {}

  getAll() {
    return this.blogsResitory.find();
  }

  getById(id: number) {
    return this.blogsResitory.findByIds([id]);
  }

  create(body: CreateBlogDto) {
    return this.blogsResitory.create(body);
  }

  edit(id: number, body: UpdateBlogDto) {
    return this.blogsResitory.update({ id }, body);
  }

  delete(id: number) {}
}
