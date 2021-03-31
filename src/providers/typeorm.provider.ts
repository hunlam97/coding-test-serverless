import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsEntity } from 'src/modules/blogs/blogs.entity';
import { UsersEntity } from '../modules/users/users.entity';

export const DatabaseProvider = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [UsersEntity, BlogsEntity],
  synchronize: true,
});
