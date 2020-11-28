import Http from '../core/http';
import { inject, injectable } from 'inversify';
import { Job } from './types';

@injectable()
export default class JobRepository {
    @inject(Http)
    private http!: Http;

    async fetchAll(): Promise<Job[]> {
        const response = await this.http.get<Job[]>('jobs');
        return response.data;
    }
}
