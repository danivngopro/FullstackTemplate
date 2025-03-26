import mongoose from 'mongoose';
import { config } from '../../config';
import { ExampleDocument } from './interface';

const ExamplesSchema = new mongoose.Schema<ExampleDocument>(
    {
        name: {
            type: String,
            required: true,
            index: true,
            unique: true,
        },
    },
    {
        versionKey: false,
    },
);

export const ExamplesModel = mongoose.model<ExampleDocument>(config.mongo.examplesCollectionName, ExamplesSchema);
