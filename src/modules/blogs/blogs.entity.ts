import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { BlogDto } from './dto/blog.dto';

@Entity({
  name: 'Blogs',
})
export class BlogsEntity implements BlogDto {
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  imageUrl: string;

  @Column({ type: 'varchar' })
  content: string;

  @Column({ default: false, type: 'boolean' })
  isArchived: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}

export const BlogsRepository = TypeOrmModule.forFeature([BlogsEntity]);
