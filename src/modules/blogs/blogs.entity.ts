import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { BlogDto } from './dto/blog.dto';

@Entity({
  name: 'Blogs',
})
export class BlogsEntity implements BlogDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

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
