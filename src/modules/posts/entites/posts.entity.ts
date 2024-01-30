import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Author } from '../../../modules/author/entites/authors.entity';

@Schema({ versionKey: false, id: true })
export class Posts {
  @Prop()
  public id?: mongoose.Schema.Types.ObjectId;
  @Prop()
  public title: string;
  @Prop()
  public content: string;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' } })
  author: Author;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
export type PostsDocument = HydratedDocument<Posts>;
