import { Controller, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthorDto } from '../dtos/author.dto';
import { CreateAuthorDto } from '../dtos/create-author.dto';
import { IAuthorService } from '../interfaces/author.interface';

@ApiTags('Auhtors')
@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: IAuthorService) {}

  @ApiCreatedResponse({ type: AuthorDto })
  @HttpCode(HttpStatus.CREATED)
  async createAuthor(dto: CreateAuthorDto): Promise<AuthorDto> {
    return await this.authorService.createAuthor(dto);
  }
}
