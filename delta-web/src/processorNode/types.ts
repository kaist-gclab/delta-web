import { AssetType } from '../asset/types';
import { JobType } from '../job/types';

export interface ProcessorNode {
    id: number;
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
