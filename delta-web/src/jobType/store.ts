import { makeAutoObservable, runInAction } from 'mobx';
import { JobType, JobTypes } from '../api';

class JobTypeStore {
    constructor() {
        makeAutoObservable(this);
    }

    jobTypes?: JobType[];
    jobType?: JobType | null;

    async fetchAll() {
        const jobTypes = await JobTypes.getJobTypes();
        runInAction(() => {
            this.jobTypes = jobTypes?.sort((a, b) => Number(a.id) - Number(b.id));
        });
    }

    async fetch(id: string) {
        this.jobType = undefined;
        await this.fetchAll();
        runInAction(() => {
            this.jobType = this.jobTypes?.find(e => e.id.toString() === id) ?? null;
        });
    }
}

export default new JobTypeStore();
