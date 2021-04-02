import { BlogDto } from '.';
import { IsNotEmpty, IsOptional, IsUrl, IsString } from 'class-validator';

export class CreateBlogDto
  implements
    Omit<
      BlogDto,
      'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'isArchived'
    > {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsUrl()
  imageUrl: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
