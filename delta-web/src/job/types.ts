import { Asset } from '../asset/types';
import { JobType } from '../jobType/types';
import { ProcessorNode } from '../processorNode/types';

export interface Job {
    id: number;
    jobType: JobType;
    inputAsset: Asset | null;
    jobArguments: string;
    createdAt: string;
    assignedProcessorNode: ProcessorNode | null;
}

export interface JobExecution {
    id: string;
    job: Job;
    processorNode: ProcessorNode;
}

export interface JobExecutionStatus {
    id: number;
    jobExecution: JobExecution;
    timestamp: string;
    status: string;
}

export interface CreateJobRequest {
    jobTypeId: number;
    inputAssetId: number | null;
    jobArguments: string;
    assignedProcessorNodeId: number | null;
}
