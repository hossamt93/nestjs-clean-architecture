import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from '../dtos/create-author.dto';
import { AuthorDto } from '../dtos/author.dto';
import { authorDocument } from '../entites/authors.entity';

@Injectable()
export abstract class IAuthorService {
  abstract createAuthor(dto: CreateAuthorDto): Promise<AuthorDto>;

  protected mapToDto(author: authorDocument): AuthorDto {
    return {
      id: author.id,
      firstName: author.firstName,
      middleName: author.middleName,
      lastName: author.lastName,
      posts: author.posts.map((p) => ({
        content: p.content,
        id: p.id as unknown as string,
        title: p.title,
      })),
    };
  }
}
