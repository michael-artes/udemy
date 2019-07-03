import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ICategory } from './categories.interface';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectID } from 'bson';

@Injectable()
export class CategoriesService {

    constructor(
        @InjectModel('Category') 
        private readonly categorySchema: Model<ICategory>
    ){ }

    async findAll(): Promise<ICategory[]>{

        try {
            return await this.categorySchema.find();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async create(category: ICategory): Promise<ICategory>{

        try {
            return this.categorySchema.create(category);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async update(category: ICategory): Promise<ICategory>{

        try {
            return this.categorySchema.findByIdAndUpdate({_id: category.id}, category, {new: true});
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async delete(categoryID: ObjectID): Promise<ICategory>{

        try {
            return this.categorySchema.findByIdAndDelete({_id: categoryID});
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

}
