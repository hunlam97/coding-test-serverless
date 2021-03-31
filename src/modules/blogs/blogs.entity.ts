import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'Blogs',
})
export class BlogsEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'string' })
  name: string;

  @Column({ type: 'date' })
  dob: Date;

  @Column({ default: false, type: 'boolean' })
  isAdmin: boolean;

  @Column({ default: true, type: 'boolean' })
  isActive: boolean;
}

export const BlogsRepository = TypeOrmModule.forFeature([BlogsEntity]);
