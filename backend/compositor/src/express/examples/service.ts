import axios from 'axios';
import { config } from '../../config';

const {
    examples: { uri, examplesRoute: baseRoute },
    service,
} = config;

export class ExamplesService {
    private static api = axios.create({ baseURL: `${uri}${baseRoute}`, timeout: service.requestTimeout, params: { expanded: true } });

    static async createOne<T extends boolean>(example, _populate: T) {
        const { data } = await ExamplesService.api.post('/', example);
        return data;
    }
}
