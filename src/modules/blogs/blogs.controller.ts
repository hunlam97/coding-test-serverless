import {
  Controller,
  Get,
  Patch,
  Post,
  Param,
  Delete,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AdminGuard } from '../../guards/admin.guard';
import { AuthGuard } from '../../guards/auth.guard';
import { BlogsService } from './blogs.service';
import { CreateBlogDto, UpdateBlogDto } from './dto';

@Controller({ path: '/blogs' })
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get('/')
  getAll() {
    return this.blogsService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.blogsService.getById(+id);
  }

  @UseGuards(AuthGuard, AdminGuard)
  @Post('/create')
  create(@Body() body: CreateBlogDto) {
    return this.blogsService.create(body);
  }

  @UseGuards(AuthGuard, AdminGuard)
  @Patch('/edit/:id')
  edit(@Param('id') id: string, @Body() body: UpdateBlogDto) {
    return this.blogsService.edit(+id, body);
  }

  @UseGuards(AuthGuard, AdminGuard)
  @Delete('/:id')
  delete(@Param('id') id: string) {}
}
