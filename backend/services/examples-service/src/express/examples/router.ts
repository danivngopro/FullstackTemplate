import { Router } from 'express';
import { validateRequest, wrapController } from '../../utils/express/wrappers';
import { ExamplesController } from './controller';
import {
    createExampleRequestSchema,
    deleteExampleRequestSchema,
    getExampleByIdRequestSchema,
    getExamplesByIdsRequestSchema,
    getExamplesByQueryRequestSchema,
    getByNamesRequestSchema,
    updateExampleRequestSchema,
} from './validations';

export const examplesRouter = Router();

examplesRouter.get('/', validateRequest(getExamplesByQueryRequestSchema), wrapController(ExamplesController.getExamplesByQuery));

examplesRouter.get('/:id', validateRequest(getExampleByIdRequestSchema), wrapController(ExamplesController.getExampleById));

examplesRouter.post('/names', validateRequest(getByNamesRequestSchema), wrapController(ExamplesController.getByNames));

examplesRouter.post('/ids', validateRequest(getExamplesByIdsRequestSchema), wrapController(ExamplesController.getExamplesByIds));

examplesRouter.post('/', validateRequest(createExampleRequestSchema), wrapController(ExamplesController.createExample));

examplesRouter.put('/:id', validateRequest(updateExampleRequestSchema), wrapController(ExamplesController.updateExample));

examplesRouter.delete('/:id', validateRequest(deleteExampleRequestSchema), wrapController(ExamplesController.deleteExample));
