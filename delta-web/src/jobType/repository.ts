import Http from '../core/http';
import { JobType } from './types';

class JobTypeRepository {
    private http = Http;

    async fetchAll(): Promise<JobType[]> {
        const response = await this.http.get<JobType[]>('job-types');
        return response.data;
    }
}

export default new JobTypeRepository();
