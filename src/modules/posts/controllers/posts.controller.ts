import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PostDto } from '../dtos/post.dto';
import { IPostService } from '../interfaces/post.interface';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: IPostService) {}

  @Post()
  @ApiCreatedResponse({ type: PostDto })
  @HttpCode(HttpStatus.CREATED)
  async createPost(@Body() dto: CreatePostDto): Promise<PostDto> {
    return await this.postsService.createPost(dto);
  }

  @Get()
  @ApiResponse({ type: Array<PostDto> })
  async getAllPosts(): Promise<PostDto[] | []> {
    return await this.postsService.getAllPosts();
  }
}
