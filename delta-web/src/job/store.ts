import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import JobRepository from './repository';

@injectable()
class JobStore {
    constructor() {
        makeAutoObservable(this);
    }

    @inject(JobRepository)
    private jobRepository!: JobRepository
}

export default JobStore;
