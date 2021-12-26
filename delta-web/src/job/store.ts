import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import JobRepository from './repository';
import { CreateJobRequest, Job } from './types';

@injectable()
class JobStore {
    constructor() {
        makeAutoObservable(this);
    }

    jobs?: Job[];
    job?: Job | null;

    @inject(JobRepository)
    private jobRepository!: JobRepository

    *create(request: CreateJobRequest) {
        yield this.jobRepository.create(request);
    }

    *fetchAll() {
        this.jobs = yield this.jobRepository.fetchAll();
        this.jobs = this.jobs?.sort((a, b) => Number(a.id) - Number(b.id));
    }

    *fetch(id: string) {
        this.job = undefined;
        yield this.fetchAll();
        this.job = this.jobs?.find(e => e.id === id) ?? null;
    }
}

export default JobStore;
