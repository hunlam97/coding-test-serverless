import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FirebaseService } from '../../providers/firebase/firebase.service';
import { Repository } from 'typeorm';
import { BlogsEntity } from './blogs.entity';
import { BlogDto, CreateBlogDto, UpdateBlogDto } from './dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogsEntity)
    private blogsResitory: Repository<BlogsEntity>,

    private firebaseService: FirebaseService,
  ) {}
  create = async (body: CreateBlogDto) => {
    const bodyWithTimeStamp = {
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const document = await (
      await this.firebaseService.getCollection('blogs').add(bodyWithTimeStamp)
    ).get();
    const { id } = document;
    const data = (
      await this.firebaseService.getCollection('blogs').doc(id).get()
    ).data();
    await this.blogsResitory.insert({ id, ...data });
    return this.blogsResitory.findOne(id);
  };

  edit = async (id: string, body: UpdateBlogDto) => {
    const bodyWithTimeStamp = { ...body, updatedAt: new Date().toISOString() };
    await this.firebaseService
      .getCollection('blogs')
      .doc(id)
      .set(bodyWithTimeStamp);
    return this.blogsResitory.update({ id }, bodyWithTimeStamp);
  };

  delete = async (id: string) => {
    await this.firebaseService.getCollection('blogs').doc(id).delete();
    return this.blogsResitory.update({ id }, { isArchived: true });
  };
}
