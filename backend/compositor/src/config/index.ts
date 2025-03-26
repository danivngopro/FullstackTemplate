import env from 'env-var';
import './dotenv';

export const config = {
    service: {
        port: env.get('PORT').required().asPortNumber(),
        systemUnavailableURL: env.get('SYSTEM_UNAVAILABLE_URL').required().asString(),
        maxFileSize: env.get('MAX_FILE_SIZE').default(50000000).asInt(),
        requestTimeout: env.get('REQUEST_TIMEOUT').default(10000).asIntPositive(),
        standardConcurrency: env.get('STANDARD_CONCURRENCY').default(10).asInt(),
        paginationMaxPageSize: env.get('PAGINATION_MAX_PAGE_SIZE').default(10).asInt(),
        paginationMinPageSize: env.get('PAGINATION_MIN_PAGE_SIZE').default(1).asInt(),
    },
    examples: {
        uri: env.get('EXAMPLES_SERVICE_URI').required().asString(),
        examplesRoute: env.get('EXAMPLES_BASE_ROUTE').default('/api/examples').asString(),
    },
};
