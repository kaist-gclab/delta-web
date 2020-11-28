import { Asset } from '../asset/types';
import { ProcessorNode } from '../processorNode/types';

export interface Job {
    id: number;
    jobType: JobType;
    inputAsset: Asset | null;
    jobArguments: string;
    createdAt: string;
    assignedProcessorNode: ProcessorNode;
}
