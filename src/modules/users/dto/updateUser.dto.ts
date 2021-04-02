import { IsAlphanumeric, IsISO8601, IsOptional } from 'class-validator';
import { UserDto } from './user.dto';

export class UpdateUserDto implements Pick<UserDto, 'name' | 'dob'> {
  @IsOptional()
  @IsAlphanumeric()
  name: string;

  @IsOptional()
  @IsISO8601()
  dob: Date;
}
