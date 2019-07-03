import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        minlength: 3,
        maxlength: 80
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }]
  }, {timestamps: true});