import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import ProcessorNodeRepository from './repository';
import { ProcessorNode } from './types';

@injectable()
class ProcessorNodeStore {
    constructor() {
        makeAutoObservable(this);
    }

    processorNode?: ProcessorNode | null;

    @inject(ProcessorNodeRepository)
    private monitoringRepository!: ProcessorNodeRepository
}

export default ProcessorNodeStore;
