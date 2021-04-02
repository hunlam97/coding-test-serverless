import { IsNotEmpty, IsEmail, IsISO8601, IsString } from 'class-validator';
import { UserDto } from './user.dto';

export class CreateUserDto
  implements
    Pick<
      UserDto & { password: string },
      'email' | 'name' | 'dob' | 'password'
    > {
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsISO8601()
  dob: Date;
}
