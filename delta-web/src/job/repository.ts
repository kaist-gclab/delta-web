import Http from '../core/http';
import { CreateJobRequest, Job } from './types';

class JobRepository {
    private http = Http;

    async create(request: CreateJobRequest): Promise<Job> {
        const response = await this.http.post<Job>('jobs', request);
        return response.data;
    }

    async fetchAll(): Promise<Job[]> {
        const response = await this.http.get<Job[]>('jobs');
        return response.data;
    }
}

export default new JobRepository();
