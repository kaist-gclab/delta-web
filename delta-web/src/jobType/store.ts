import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import JobTypeRepository from './repository';

@injectable()
class JobTypeStore {
    constructor() {
        makeAutoObservable(this);
    }

    @inject(JobTypeRepository)
    private jobTypeRepository!: JobTypeRepository
}

export default JobTypeStore;
