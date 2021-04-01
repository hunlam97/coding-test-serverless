import { BlogDto } from '.';
import {
  IsNotEmpty,
  IsBoolean,
  IsAlphanumeric,
  IsNumber,
} from 'class-validator';

export class PublicBlogDto
  implements Omit<BlogDto, 'createdAt' | 'updatedAt' | 'deletedAt'> {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsAlphanumeric()
  title: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  content: string;

  @IsBoolean()
  isArchived: boolean;
}
