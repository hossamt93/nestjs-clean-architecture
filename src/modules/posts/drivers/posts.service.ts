import { Injectable } from '@nestjs/common';
import { IPostService } from '../interfaces/post.interface';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PostDto } from '../dtos/post.dto';
import { Posts } from '../entites/posts.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from '../../../modules/author/entites/authors.entity';

@Injectable()
export class PostsService extends IPostService {
  constructor(
    @InjectModel(Posts.name) private readonly PostsModel: Model<Posts>,
    @InjectModel(Author.name) private readonly authorModel: Model<Author>,
  ) {
    super();
  }

  async createPost(dto: CreatePostDto): Promise<PostDto> {
    const author = await this.authorModel.findById(dto.authorId).exec();
    const newPost: Posts = {
      content: dto.content,
      title: dto.title,
      author,
    };
    const post = await this.PostsModel.create(newPost);
    return this.mapToDto(post);
  }

  async getAllPosts(): Promise<PostDto[] | []> {
    const posts = await this.PostsModel.find().exec();
    return posts.map((post) => this.mapToDto(post));
  }

  async getPostById(id: number): Promise<PostDto> {
    const post = await this.PostsModel.findById(id).exec();
    return this.mapToDto(post);
  }
}
