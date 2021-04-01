import { IsAlphanumeric, IsDate, IsOptional } from 'class-validator';
import { UserDto } from './user.dto';

export class UpdateUserDto implements Pick<UserDto, 'name' | 'dob'> {
  @IsOptional()
  @IsAlphanumeric()
  name: string;

  @IsOptional()
  @IsDate()
  dob: Date;
}
