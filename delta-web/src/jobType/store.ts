import { inject, injectable } from 'inversify';
import { makeAutoObservable, runInAction } from 'mobx';
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

    async fetchAll() {
        const jobTypes = await this.jobTypeRepository.fetchAll();
        runInAction(() => {
            this.jobTypes = jobTypes?.sort((a, b) => Number(a.id) - Number(b.id));
        });
    }

    *fetch(id: string) {
        this.jobType = undefined;
        yield this.fetchAll();
        this.jobType = this.jobTypes?.find(e => e.id === id) ?? null;
    }
}

export default JobTypeStore;
