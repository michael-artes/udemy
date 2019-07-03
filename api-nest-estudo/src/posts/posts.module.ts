import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { PostSchema } from './post.schema';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
