import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PostDto } from '../dtos/post.dto';
import { PostsDocument } from '../entites/posts.entity';

@Injectable()
export abstract class IPostService {
  abstract createPost(dto: CreatePostDto): Promise<PostDto>;
  abstract getPostById(id: number): Promise<PostDto>;
  abstract getAllPosts(): Promise<PostDto[] | []>;

  protected mapToDto(post: PostsDocument): PostDto {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
    };
  }
}
