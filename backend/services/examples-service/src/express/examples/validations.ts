import { z } from 'zod';
import { zodMongoObjectId } from '../../utils/zod';

const requiredFields = z
    .object({
        name: z.string(),
    })
    .required();

// GET /api/examples
export const getExamplesByQueryRequestSchema = z.object({
    body: z.object({}),
    query: z
        .object({
            step: z.coerce.number().min(0).default(0),
            limit: z.coerce.number().optional(),
        })
        .merge(requiredFields.partial()),
    params: z.object({}),
});

// GET /api/examples/:id
export const getExampleByIdRequestSchema = z.object({
    body: z.object({}),
    query: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
});

// POST /api/examples/names
export const getByNamesRequestSchema = z.object({
    body: z.object({
        names: z.array(z.string()),
    }),
    query: z.object({}),
    params: z.object({}),
});

// POST /api/examples/ids
export const getExamplesByIdsRequestSchema = z.object({
    body: z.object({
        ids: z.array(zodMongoObjectId),
    }),
    query: z.object({}),
    params: z.object({}),
});

// POST /api/examples
export const createExampleRequestSchema = z.object({
    body: requiredFields,
    query: z.object({}),
    params: z.object({}),
});

// PUT /api/examples/:id
export const updateExampleRequestSchema = z.object({
    body: requiredFields.partial(),
    query: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
});

// DELETE /api/examples/:id
export const deleteExampleRequestSchema = z.object({
    body: z.object({}),
    query: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
});
