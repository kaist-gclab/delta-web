import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import ProcessorNodeRepository from './repository';

@injectable()
class ProcessorNodeStore {
    constructor() {
        makeAutoObservable(this);
    }

    @inject(ProcessorNodeRepository)
    private monitoringRepository!: ProcessorNodeRepository
}

export default ProcessorNodeStore;
