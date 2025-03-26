/* eslint-disable no-nested-ternary */
/* eslint-disable max-classes-per-file */
export class ServiceError extends Error {
    constructor(public code: number, message: string, public metadata: any = {}) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}

export class DocumentNotFoundError extends ServiceError {
    constructor(id: string) {
        super(404, `No branch found with id ${id}`);
    }
}
