import { inject, injectable } from 'inversify';
import { makeAutoObservable, runInAction } from 'mobx';
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

    async fetchAll() {
        const processorNodes = await this.processorNodeRepository.fetchAll();
        runInAction(() => {
            this.processorNodes = processorNodes?.sort((a, b) => Number(a.id) - Number(b.id));
        });
    }

    *fetch(id: string) {
        this.processorNode = undefined;
        yield this.fetchAll();
        this.processorNode = this.processorNodes?.find(e => e.id === id) ?? null;
    }
}

export default ProcessorNodeStore;
