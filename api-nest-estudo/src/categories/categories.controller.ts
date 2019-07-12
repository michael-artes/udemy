import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ICategory } from './category.inteface';
import { AuthGuard } from '@nestjs/passport';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async index() {
    return await this.categoriesService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard())
  async create(@Body() category: ICategory) {
    return await this.categoriesService.create(category);
  }

  @Put()
  @UseGuards(AuthGuard())
  async update(@Body() category: ICategory) {
    return await this.categoriesService.update(category);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async delete(@Param() params) {
    return await this.categoriesService.delete(params.id);
  }
}
