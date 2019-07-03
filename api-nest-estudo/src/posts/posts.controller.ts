import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { IPost } from './post.interface';
import { PostsService } from './posts.service';


@Controller('posts')
export class PostsController {

    constructor(private readonly postService: PostsService)
    {}

    @Get()
    async index(){
        return await this.postService.findAll();
    }

    @Post()
    async create(@Body() post: IPost){
        return await this.postService.create(post);
    }

    @Put()
    async update(@Body() post: IPost){
        console.log('atualizando posts',post);
        return await this.postService.update(post);
    }

    @Delete(':id')
    async delete(@Param() params){
        console.log('deletando id - ', params.id);
        return await this.postService.delete(params.id);
    }

}
