import Http from '../core/http';
import { inject, injectable } from 'inversify';
import { ProcessorNode } from './types';

@injectable()
export default class ProcessorNodeRepository {
    private http = Http;

    async fetchAll(): Promise<ProcessorNode[]> {
        const response = await this.http.get<ProcessorNode[]>('processor-nodes');
        return response.data;
    }
}
