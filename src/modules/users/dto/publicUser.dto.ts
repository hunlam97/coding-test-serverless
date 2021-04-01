import { IsAlphanumeric, IsDate, IsNotEmpty, IsBoolean } from 'class-validator';
import { UserDto } from './user.dto';

export class PublicUserDto
  implements Omit<UserDto, 'createdAt' | 'updatedAt' | 'deletedAt'> {
  @IsNotEmpty()
  @IsAlphanumeric()
  firebaseId: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  name: string;

  @IsNotEmpty()
  @IsDate()
  dob: Date;

  @IsNotEmpty()
  @IsDate()
  isAdmin: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}
