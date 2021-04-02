import { BlogDto } from '.';
import {
  IsNotEmpty,
  IsBoolean,
  IsAlphanumeric,
  IsUrl,
  IsOptional,
  IsString,
} from 'class-validator';

export class PublicBlogDto implements BlogDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsUrl()
  imageUrl: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsBoolean()
  isArchived: boolean;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
