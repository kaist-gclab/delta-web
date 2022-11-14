import { makeAutoObservable, runInAction } from 'mobx';
import { CreateJobRequest, Job, Jobs } from '../api';

class JobStore {
    constructor() {
        makeAutoObservable(this);
    }

    jobs?: Job[];
    job?: Job | null;

    async create(request: CreateJobRequest) {
        await Jobs.createJob(request);
    }

    async fetchAll() {
        const jobs = await Jobs.getJobs();
        runInAction(() => { this.jobs = jobs?.sort((a, b) => Number(a.id) - Number(b.id)); });
    }

    async fetch(id: string) {
        this.job = undefined;
        await this.fetchAll();
        runInAction(() => { this.job = this.jobs?.find(e => e.id.toString() === id) ?? null; });
    }
}

export default new JobStore();
