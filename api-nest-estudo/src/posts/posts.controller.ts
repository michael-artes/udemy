import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { IPost } from './post.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async index() {
    return await this.postsService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard())
  async create(@Body() post: IPost) {
    return await this.postsService.create(post);
  }

  @Put()
  @UseGuards(AuthGuard())
  async update(@Body() post: IPost) {
    return await this.postsService.update(post);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async delete(@Param() params) {
    return await this.postsService.delete(params.id);
  }
}
