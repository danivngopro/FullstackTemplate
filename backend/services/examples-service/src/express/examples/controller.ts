import { Response } from 'express';
import { TypedRequest } from '../../utils/zod';
import {
    createExampleRequestSchema,
    deleteExampleRequestSchema,
    getExampleByIdRequestSchema,
    getExamplesByIdsRequestSchema,
    getExamplesByQueryRequestSchema,
    getByNamesRequestSchema,
    updateExampleRequestSchema,
} from './validations';
import { ExamplesModel } from './model';
import { DocumentNotFoundError } from '../../utils/errors';

export class ExamplesController {
    static async getExamplesByQuery(req: TypedRequest<typeof getExamplesByQueryRequestSchema>, res: Response) {
        const { step, limit, ...query } = req.query;
        res.json(await ExamplesModel.find(query, {}, limit ? { limit, skip: limit * step } : {}).exec());
    }

    static async getExampleById(req: TypedRequest<typeof getExampleByIdRequestSchema>, res: Response) {
        const { id } = req.params;
        res.json(await ExamplesModel.findById(id).orFail(new DocumentNotFoundError(id)).exec());
    }

    static async getByNames(req: TypedRequest<typeof getByNamesRequestSchema>, res: Response) {
        const { names } = req.body;
        res.json(await ExamplesModel.find({ name: { $in: names } }).exec());
    }

    static async getExamplesByIds(req: TypedRequest<typeof getExamplesByIdsRequestSchema>, res: Response) {
        const { ids } = req.body;
        res.json(await ExamplesModel.find({ _id: { $in: ids } }).exec());
    }

    static async createExample(req: TypedRequest<typeof createExampleRequestSchema>, res: Response) {
        res.json(await ExamplesModel.create(req.body));
    }

    static async updateExample(req: TypedRequest<typeof updateExampleRequestSchema>, res: Response) {
        const { id } = req.params;
        const update = req.body;
        res.json(await ExamplesModel.findByIdAndUpdate(id, update, { new: true }).orFail(new DocumentNotFoundError(id)).exec());
    }

    static async deleteExample(req: TypedRequest<typeof deleteExampleRequestSchema>, res: Response) {
        const { id } = req.params;
        res.json(await ExamplesModel.findByIdAndDelete(id).orFail(new DocumentNotFoundError(id)).lean().exec());
    }
}
