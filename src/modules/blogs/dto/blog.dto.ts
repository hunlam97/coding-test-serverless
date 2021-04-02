export class BlogDto {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
