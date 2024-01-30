import { Injectable } from '@nestjs/common';
import { IAuthorService } from '../interfaces/author.interface';
import { AuthorDto } from '../dtos/author.dto';
import { CreateAuthorDto } from '../dtos/create-author.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from '../entites/authors.entity';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService extends IAuthorService {
  constructor(
    @InjectModel(Author.name) private readonly authorModel: Model<Author>,
  ) {
    super();
  }
  async createAuthor(dto: CreateAuthorDto): Promise<AuthorDto> {
    const newAuthor: Author = {
      firstName: dto.firstName,
      lastName: dto.lastName,
      middleName: dto.middleName,
      posts: [],
    };
    const created = await this.authorModel.create(newAuthor);
    return this.mapToDto(created);
  }
}
