import Http from '../core/http';
import { inject, injectable } from 'inversify';
import { CreateJobRequest, Job } from './types';

@injectable()
export default class JobRepository {
    @inject(Http)
    private http!: Http;

    async create(request: CreateJobRequest): Promise<Job> {
        const response = await this.http.post<Job>('jobs', request);
        return response.data;
    }

    async fetchAll(): Promise<Job[]> {
        const response = await this.http.get<Job[]>('jobs');
        return response.data;
    }
}
