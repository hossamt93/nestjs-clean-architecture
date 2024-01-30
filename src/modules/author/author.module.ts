import { Module } from '@nestjs/common';
import { AuthorController } from './controllers/author.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, authorsSchema } from './entites/authors.entity';
import { AuthorService } from './drivers/author.service';
import { IAuthorService } from './interfaces/author.interface';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Author.name, schema: authorsSchema }]),
  ],
  controllers: [AuthorController],
  providers: [
    {
      useClass: AuthorService,
      provide: IAuthorService,
    },
  ],
})
export class AuthorModule {}
