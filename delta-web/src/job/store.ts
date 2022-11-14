import { makeAutoObservable, runInAction } from 'mobx';
import JobRepository from './repository';
import { CreateJobRequest, Job } from './types';

class JobStore {
    constructor() {
        makeAutoObservable(this);
    }

    jobs?: Job[];
    job?: Job | null;

    private jobRepository = JobRepository;

    async create(request: CreateJobRequest) {
        await this.jobRepository.create(request);
    }

    async fetchAll() {
        const jobs = await this.jobRepository.fetchAll();
        runInAction(() => { this.jobs = jobs?.sort((a, b) => Number(a.id) - Number(b.id)); });
    }

    async fetch(id: string) {
        this.job = undefined;
        await this.fetchAll();
        runInAction(() => { this.job = this.jobs?.find(e => e.id === id) ?? null; });
    }
}

export default JobStore;
