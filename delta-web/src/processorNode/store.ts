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
        this.processorNodes = this.processorNodes?.sort((a, b) => Number(a.id) - Number(b.id));
    }

    *fetch(id: string) {
        this.processorNode = undefined;
        yield this.fetchAll();
        this.processorNode = this.processorNodes?.find(e => e.id === id) ?? null;
    }
}

export default ProcessorNodeStore;
