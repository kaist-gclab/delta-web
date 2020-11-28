import Http from '../core/http';
import { inject, injectable } from 'inversify';
import { JobType } from './types';

@injectable()
export default class JobTypeRepository {
    @inject(Http)
    private http!: Http;

    async fetchAll(): Promise<JobType[]> {
        const response = await this.http.get<JobType[]>('job-types');
        return response.data;
    }
}
