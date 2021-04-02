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

// @UseGuards(AuthGuard, AdminGuard)
@Controller({ path: '/blogs' })
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}
  @Get('/ping')
  ping() {
    return 'Pong!';
  }

  @Post('/')
  create(@Body() body: CreateBlogDto) {
    console.log(body);
    return this.blogsService.create(body);
  }

  @Patch('/:id')
  edit(@Param('id') id: string, @Body() body: UpdateBlogDto) {
    return this.blogsService.edit(id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.blogsService.delete(id);
  }
}
