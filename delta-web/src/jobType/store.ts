import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import JobTypeRepository from './repository';
import { JobType } from './types';

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

    *fetch(id: number) {
        this.jobType = undefined;
        yield this.fetchAll();
        this.jobType = this.jobTypes?.find(e => e.id === id) ?? null;
    }
}

export default JobTypeStore;
