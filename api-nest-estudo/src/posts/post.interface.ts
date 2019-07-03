import { ObjectID } from "bson";
import * as mongoose from 'mongoose';

export interface IPost extends mongoose.Document {
    id?: ObjectID;
    title: string;
    description: string;
    categories: [ObjectID];
}
