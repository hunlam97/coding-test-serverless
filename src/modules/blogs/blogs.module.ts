import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsRepository } from './blogs.entity';
import { BlogsService } from './blogs.service';

@Module({
  imports: [BlogsRepository],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
