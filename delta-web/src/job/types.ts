import { Asset } from '../asset/types';
import { JobType } from '../jobType/types';
import { ProcessorNode } from '../processorNode/types';

export interface Job {
    id: string;
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
    id: string;
    jobExecution: JobExecution;
    timestamp: string;
    status: string;
}

export interface CreateJobRequest {
    jobTypeId: string;
    inputAssetId: string | null;
    jobArguments: string;
    assignedProcessorNodeId: number | null;
}
