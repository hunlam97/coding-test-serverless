import { BlogDto } from '.';
import {
  IsNotEmpty,
  IsBoolean,
  IsAlphanumeric,
  IsNumber,
} from 'class-validator';

export class CreateBlogDto
  implements Omit<BlogDto, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'> {
  @IsNotEmpty()
  @IsAlphanumeric()
  title: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  content: string;

  @IsBoolean()
  isArchived: boolean;
}
