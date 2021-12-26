import { AssetType } from '../assetType/types';
import { JobType } from '../jobType/types';

export interface ProcessorNode {
    id: string;
    key: string;
    name: string | null;
}

export interface ProcessorNodeCapability {
    id: number;
    processorNode: ProcessorNode;
    jobType: JobType;
    assetType: AssetType | null;
    mediaType: string;
}

export interface ProcessorNodeStatus {
    id: number;
    processorNode: ProcessorNode;
    timestamp: string;
    status: string;
}
