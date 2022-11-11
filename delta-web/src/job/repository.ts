import Http from '../core/http';
import { injectable } from 'inversify';
import { CreateJobRequest, Job } from './types';

@injectable()
export default class JobRepository {
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
