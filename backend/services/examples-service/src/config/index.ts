import * as env from 'env-var';
import './dotenv';

export const config = {
    service: {
        port: env.get('PORT').default(8000).required().asPortNumber(),
    },
    mongo: {
        uri: env.get('MONGO_URI').default('mongodb://localhost').required().asString(),
        examplesCollectionName: env.get('EXAMPLES_COLLECTION_NAME').default('examples').required().asString(),
    },
};
