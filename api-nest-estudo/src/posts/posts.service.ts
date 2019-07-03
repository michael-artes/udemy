import { InjectModel } from '@nestjs/mongoose';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { IPost } from './post.interface';
import { Model } from 'mongoose';
import { ObjectID } from 'bson';

@Injectable()
export class PostsService {

    constructor(
        @InjectModel('Post') 
        private readonly postSchema: Model<IPost>
    ){ }

    async findAll(): Promise<IPost[]>{

        try {
            return await this.postSchema.find().populate("categories", "name");
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async create(post: IPost): Promise<IPost>{

        try {
            return this.postSchema.create(post);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async update(post: IPost): Promise<IPost>{

        try {
            return this.postSchema.findByIdAndUpdate({_id: post.id}, post, {new: true});
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async delete(postID: ObjectID): Promise<IPost>{

        try {
            return this.postSchema.findByIdAndDelete({_id: postID});
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }    

}
