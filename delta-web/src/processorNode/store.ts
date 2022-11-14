import { makeAutoObservable, runInAction } from 'mobx';
import { ProcessorNode, ProcessorNodes } from '../api';

class ProcessorNodeStore {
    constructor() {
        makeAutoObservable(this);
    }

    processorNodes?: ProcessorNode[];
    processorNode?: ProcessorNode | null;

    async fetchAll() {
        const processorNodes = await ProcessorNodes.getNodes();
        runInAction(() => {
            this.processorNodes = processorNodes?.sort((a, b) => Number(a.id) - Number(b.id));
        });
    }

    async fetch(id: string) {
        this.processorNode = undefined;
        await this.fetchAll();
        runInAction(() => {
            this.processorNode = this.processorNodes?.find(e => e.id.toString() === id) ?? null;
        });
    }
}

export default new ProcessorNodeStore();
