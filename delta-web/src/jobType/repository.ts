import Http from '../core/http';
import { inject, injectable } from 'inversify';
import { JobType } from '../job/types';

@injectable()
export default class JobTypeRepository {
    @inject(Http)
    private http!: Http;

    async fetchAll(): Promise<JobType[]> {
        return [];
    }
}
