import {
  IsAlphanumeric,
  IsISO8601,
  IsNotEmpty,
  IsBoolean,
  IsEmail,
} from 'class-validator';
import { UserDto } from './user.dto';

export class PublicUserDto
  implements Omit<UserDto, 'createdAt' | 'updatedAt' | 'deletedAt'> {
  @IsNotEmpty()
  @IsAlphanumeric()
  uid: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  name: string;

  @IsNotEmpty()
  @IsISO8601()
  dob: Date;

  @IsNotEmpty()
  @IsBoolean()
  isAdmin: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}
