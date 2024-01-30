import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts';
import { MongooseModuleWrapper } from './external-frameworks/mongoose';
import { AuthorModule } from './modules/author/author.module';

@Module({
  imports: [MongooseModuleWrapper, PostsModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
