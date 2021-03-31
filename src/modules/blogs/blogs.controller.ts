import { Controller, Get, Patch, Post, Param } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller({ path: '/blogs' })
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get('/')
  getAll() {}

  @Get('/:id')
  getById(@Param('id') id: string) {}

  @Post('/create')
  create() {}

  @Patch('/edit/:id')
  edit(@Param('id') id: string) {}

  @Post('/ping')
  ping() {
    return this.blogsService.ping();
  }
}
