import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import JobRepository from './repository';
import { Job } from './types';

@injectable()
class JobStore {
    constructor() {
        makeAutoObservable(this);
    }

    jobs?: Job[];
    job?: Job | null;

    @inject(JobRepository)
    private jobRepository!: JobRepository

    *fetchAll() {
        this.jobs = yield this.jobRepository.fetchAll();
        this.jobs = this.jobs?.sort((a, b) => a.id - b.id);
    }
}

export default JobStore;
