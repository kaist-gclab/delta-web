import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import JobRepository from './repository';
import { Job } from './types';

@injectable()
class JobStore {
    constructor() {
        makeAutoObservable(this);
    }

    job?: Job | null;

    @inject(JobRepository)
    private jobRepository!: JobRepository
}

export default JobStore;
