import { CreateBlogDto } from '.';
import { IsBoolean, IsOptional, IsAlphanumeric } from 'class-validator';

export class UpdateBlogDto implements Partial<CreateBlogDto> {
  @IsOptional()
  @IsAlphanumeric()
  title?: string;

  @IsOptional()
  @IsAlphanumeric()
  content?: string;

  @IsOptional()
  @IsBoolean()
  isArchived?: boolean;
}
