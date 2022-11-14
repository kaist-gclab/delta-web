import Http from '../core/http';
import { ProcessorNode } from './types';

class ProcessorNodeRepository {
    private http = Http;

    async fetchAll(): Promise<ProcessorNode[]> {
        const response = await this.http.get<ProcessorNode[]>('processor-nodes');
        return response.data;
    }
}

export default new ProcessorNodeRepository();
