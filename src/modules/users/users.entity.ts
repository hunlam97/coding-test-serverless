import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserDto } from './dto/user.dto';

@Entity({
  name: 'Users',
})
export class UsersEntity implements UserDto {
  @PrimaryColumn({ type: 'varchar' })
  firebaseId: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'date' })
  dob: Date;

  @Column({ default: false, type: 'boolean' })
  isAdmin: boolean;

  @Column({ default: true, type: 'boolean' })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}

export const UsersRepository = TypeOrmModule.forFeature([UsersEntity]);
