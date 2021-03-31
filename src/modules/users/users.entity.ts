import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'Users',
})
export class UsersEntity {
  @PrimaryColumn({
    type: 'string',
  })
  firebaseId: string;

  @Column({ type: 'string' })
  name: string;

  @Column({ type: 'date' })
  dob: Date;

  @Column({ default: false, type: 'boolean' })
  isAdmin: boolean;

  @Column({ default: true, type: 'boolean' })
  isActive: boolean;
}

export const UsersRepository = TypeOrmModule.forFeature([UsersEntity]);
