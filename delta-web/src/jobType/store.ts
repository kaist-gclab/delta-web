import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { JobType } from '../job/types';
import JobTypeRepository from './repository';

@injectable()
class JobTypeStore {
    constructor() {
        makeAutoObservable(this);
    }

    jobTypes?: JobType[];
    jobType?: JobType | null;

    @inject(JobTypeRepository)
    private jobTypeRepository!: JobTypeRepository

    *fetchAll() {
        this.jobTypes = yield this.jobTypeRepository.fetchAll();
        this.jobTypes = this.jobTypes?.sort((a, b) => a.id - b.id);
    }
}

export default JobTypeStore;
