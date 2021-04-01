export class UserDto {
  firebaseId: string;
  name: string;
  dob: Date;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
