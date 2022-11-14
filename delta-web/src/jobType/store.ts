import { makeAutoObservable, runInAction } from 'mobx';
import JobTypeRepository from './repository';
import { JobType } from './types';

class JobTypeStore {
    constructor() {
        makeAutoObservable(this);
    }

    jobTypes?: JobType[];
    jobType?: JobType | null;

    private jobTypeRepository = JobTypeRepository;

    async fetchAll() {
        const jobTypes = await this.jobTypeRepository.fetchAll();
        runInAction(() => {
            this.jobTypes = jobTypes?.sort((a, b) => Number(a.id) - Number(b.id));
        });
    }

    async fetch(id: string) {
        this.jobType = undefined;
        await this.fetchAll();
        runInAction(() => {
            this.jobType = this.jobTypes?.find(e => e.id === id) ?? null;
        });
    }
}

export default new JobTypeStore();
