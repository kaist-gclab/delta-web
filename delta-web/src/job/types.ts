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

export interface JobExecution {
    id: number;
    job: Job;
    processorNode: ProcessorNode;
}

export interface JobType {
    id: number;
    key: string;
    name: string;
}

export interface JobExecutionStatus {
    id: number;
    jobExecution: JobExecution;
    timestamp: string;
    status: string;
}
