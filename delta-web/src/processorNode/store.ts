import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import ProcessorNodeRepository from './repository';
import { ProcessorNode } from './types';

@injectable()
class ProcessorNodeStore {
    constructor() {
        makeAutoObservable(this);
    }

    processorNodes?: ProcessorNode[];
    processorNode?: ProcessorNode | null;

    @inject(ProcessorNodeRepository)
    private processorNodeRepository!: ProcessorNodeRepository

    *fetchAll() {
        this.processorNodes = yield this.processorNodeRepository.fetchAll();
        this.processorNodes = this.processorNodes?.sort((a, b) => a.id - b.id);
    }
}

export default ProcessorNodeStore;
