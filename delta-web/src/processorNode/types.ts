import { AssetType, JobType } from '../api';

export interface ProcessorNode {
    id: string;
    key: string;
    name: string | null;
}

export interface ProcessorNodeCapability {
    id: string;
    processorNode: ProcessorNode;
    jobType: JobType;
    assetType: AssetType | null;
    mediaType: string;
}

export interface ProcessorNodeStatus {
    id: string;
    processorNode: ProcessorNode;
    timestamp: string;
    status: string;
}
