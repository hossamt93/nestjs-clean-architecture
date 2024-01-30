import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from '../../../modules/posts/dtos/post.dto';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class AuthorDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  middleName?: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty({ type: Array<PostDto> })
  @IsArray()
  @IsOptional()
  posts?: PostDto[];
}
