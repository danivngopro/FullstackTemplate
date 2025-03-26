import { createAxiosInstance } from '../axios';
import { environment } from '../globals';
import { Example, ExampleDocument } from '../interfaces/IExample';
import { GetByQuery } from '../utils/types';

export class ExamplesService {
    private static api = createAxiosInstance(environment.api.Examples);

    static getById = async (id: string): Promise<ExampleDocument> => {
        const { data } = await this.api.get(`/${id}`);
        return data;
    };

    static getByQuery = async (query: GetByQuery<Example> = {}): Promise<ExampleDocument[]> => {
        const { data } = await this.api.get('/', { params: query });
        return data;
    };

    static createOne = async (Example: Example): Promise<ExampleDocument> => {
        const { data } = await this.api.post('/', Example);
        return data;
    };

    static updateOne = async (id: string, update: Partial<Example>): Promise<ExampleDocument> => {
        const { data } = await this.api.put(`/${id}`, update);
        return data;
    };

    static deleteOne = async (id: string): Promise<ExampleDocument> => {
        const { data } = await this.api.delete(`/${id}`);
        return data;
    };
}
