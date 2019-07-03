import { CategoriesService } from './categories.service';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ICategory } from './categories.interface';

@Controller('categories')
export class CategoriesController {

    constructor(private readonly categoryService: CategoriesService)
    {}

    @Get()
    async index(){
        return await this.categoryService.findAll();
    }

    @Post()
    async create(@Body() category: ICategory){
        return await this.categoryService.create(category);
    }

    @Put()
    async update(@Body() category: ICategory){
        console.log('atualizando categoria',category);
        return await this.categoryService.update(category);
    }

    @Delete(':id')
    async delete(@Param() params){
        console.log('deletando id - ', params.id);
        return await this.categoryService.delete(params.id);
    }
}
