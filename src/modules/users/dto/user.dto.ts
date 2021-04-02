export class UserDto {
  uid: string;
  email: string;
  name: string;
  dob: Date;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
