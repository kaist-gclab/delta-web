import { Asset, JobType, ProcessorNode } from '../api';

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
