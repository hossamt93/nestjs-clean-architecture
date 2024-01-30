import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Posts } from 'src/modules/posts/entites/posts.entity';

@Schema({ versionKey: false, id: true })
export class Author {
  @Prop()
  firstName: string;

  @Prop({ required: false })
  middleName: string;

  @Prop()
  lastName: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }] })
  posts: Posts[];
}

export const authorsSchema = SchemaFactory.createForClass(Author);
export type authorDocument = HydratedDocument<Author>;
