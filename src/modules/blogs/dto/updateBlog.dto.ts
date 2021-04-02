import { CreateBlogDto } from '.';
import { IsBoolean, IsOptional, IsUrl, IsString } from 'class-validator';

export class UpdateBlogDto implements Partial<CreateBlogDto> {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  @IsBoolean()
  isArchived?: boolean;
}
