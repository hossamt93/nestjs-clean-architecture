import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';
import { IPostService } from './interfaces/post.interface';
import { PostsService } from './drivers/posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Posts, PostsSchema } from './entites/posts.entity';
import { Author, authorsSchema } from '../author/entites/authors.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Posts.name, schema: PostsSchema },
      { name: Author.name, schema: authorsSchema },
    ]),
  ],
  controllers: [PostsController],
  providers: [
    {
      provide: IPostService,
      useClass: PostsService,
    },
  ],
})
export class PostsModule {}
