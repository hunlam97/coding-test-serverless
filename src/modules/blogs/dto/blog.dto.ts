export class BlogDto {
  id: number;
  title: string;
  content: string;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
