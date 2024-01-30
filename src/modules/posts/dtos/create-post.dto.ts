import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  readonly title: string;

  @ApiProperty()
  @IsString()
  @MinLength(2)
  readonly content: string;

  @ApiProperty()
  @IsString()
  readonly authorId: string;
}
