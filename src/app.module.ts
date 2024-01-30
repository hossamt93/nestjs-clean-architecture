import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts';
import { MongooseModuleWrapper } from './external-frameworks/mongoose';
import { AuthorModule } from './modules/author/author.module';

@Module({
  imports: [MongooseModuleWrapper, PostsModule, AuthorModule],
})
export class AppModule {}
