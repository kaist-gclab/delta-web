import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { JobType } from '../job/types';
import JobTypeRepository from './repository';

@injectable()
class JobTypeStore {
    constructor() {
        makeAutoObservable(this);
    }

    jobType?: JobType | null;

    @inject(JobTypeRepository)
    private jobTypeRepository!: JobTypeRepository
}

export default JobTypeStore;
