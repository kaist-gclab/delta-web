/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

export interface _api_JobType {
    id: string;
    key: string;
    name: string;
    jobs: _api_Job[];
}

export interface _api_AssetTag {
    id: string;
    key: string;
    value: string;
    asset: _api_Asset;
}

export interface _api_Asset {
    id: string;
    storeKey: string;
    createdAt: string;
    assetTags: _api_AssetTag[];
}

export interface AssetTag {
    id: bigint;
    key: string;
    value: string;
    asset: Asset;
}

export interface Asset {
    id: bigint;
    storeKey: string;
    createdAt: _Dayjs;
    assetTags: AssetTag[];
}

export interface ProcessorNodeStatus {
    id: bigint;
    timestamp: _Dayjs;
    status: string;
    processorNode: ProcessorNode;
}

export interface _api_ProcessorNodeStatus {
    id: string;
    timestamp: string;
    status: string;
    processorNode: _api_ProcessorNode;
}

export interface _api_ProcessorNode {
    id: string;
    processorVersionId: string;
    key: string;
    name: string | null;
    jobExecutions: _api_JobRun[];
    processorNodeStatuses: _api_ProcessorNodeStatus[];
    assignedJobs: _api_Job[];
}

export interface JobRunStatus {
    id: bigint;
    jobExecutionId: bigint;
    timestamp: _Dayjs;
    status: string | null;
    jobExecution: JobRun | null;
}

export interface _api_JobRunStatus {
    id: string;
    jobExecutionId: string;
    timestamp: string;
    status: string | null;
    jobExecution: _api_JobRun | null;
}

export interface _api_JobRun {
    id: string;
    job: _api_Job;
    processorNode: _api_ProcessorNode;
    resultAssets: _api_Asset[];
    jobExecutionStatuses: _api_JobRunStatus[];
}

export interface _api_Job {
    id: string;
    jobArguments: string;
    createdAt: string;
    assignedProcessorNodeId: string | null;
    jobType: _api_JobType;
    inputAsset: _api_Asset | null;
    jobExecutions: _api_JobRun[];
    assignedProcessorNode: _api_ProcessorNode | null;
}

export interface JobType {
    id: bigint;
    key: string;
    name: string;
    jobs: Job[];
}

export interface Job {
    id: bigint;
    jobArguments: string;
    createdAt: _Dayjs;
    assignedProcessorNodeId: bigint | null;
    jobType: JobType;
    inputAsset: Asset | null;
    jobExecutions: JobRun[];
    assignedProcessorNode: ProcessorNode | null;
}

export interface JobRun {
    id: bigint;
    job: Job;
    processorNode: ProcessorNode;
    resultAssets: Asset[];
    jobExecutionStatuses: JobRunStatus[];
}

export interface ProcessorNode {
    id: bigint;
    processorVersionId: bigint;
    key: string;
    name: string | null;
    jobExecutions: JobRun[];
    processorNodeStatuses: ProcessorNodeStatus[];
    assignedJobs: Job[];
}

export interface CreateProcessorNodeCapabilityRequest {
    jobTypeId: bigint;
    assetTypeId: bigint | null;
    mediaType: string;
}

export interface _api_CreateProcessorNodeCapabilityRequest {
    jobTypeId: string;
    assetTypeId: string | null;
    mediaType: string;
}

export interface RegisterProcessorNodeRequest {
    key: string;
    capabilities: CreateProcessorNodeCapabilityRequest[];
}

export interface _api_RegisterProcessorNodeRequest {
    key: string;
    capabilities: _api_CreateProcessorNodeCapabilityRequest[];
}

export interface UploadTicket {
    url: string;
    storeKey: string;
}

export interface _api_UploadTicket {
    url: string;
    storeKey: string;
}

export interface ObjectStorageEvent {
    time: string;
    content: string;
}

export interface _api_ObjectStorageEvent {
    time: string;
    content: string;
}

export interface ProcessorNodeEvent {
    time: string;
    content: string;
}

export interface _api_ProcessorNodeEvent {
    time: string;
    content: string;
}

export interface JobEvent {
    id: bigint;
    timestamp: _Dayjs;
    jobArguments: string;
}

export interface _api_JobEvent {
    id: string;
    timestamp: string;
    jobArguments: string;
}

export interface JobScheduleResponse {
    jobRun: JobRun;
}

export interface _api_JobScheduleResponse {
    jobRun: _api_JobRun;
}

export interface JobScheduleRequest {
    processorNodeId: bigint;
}

export interface _api_JobScheduleRequest {
    processorNodeId: string;
}

export interface CreateJobRequest {
    jobTypeId: bigint;
    inputAssetId: bigint | null;
    jobArguments: string;
    assignedProcessorNodeId: bigint | null;
}

export interface _api_CreateJobRequest {
    jobTypeId: string;
    inputAssetId: string | null;
    jobArguments: string;
    assignedProcessorNodeId: string | null;
}

export interface AddJobExecutionStatusRequest {
    status: string;
}

export interface _api_AddJobExecutionStatusRequest {
    status: string;
}

export interface JobTypeView {
    id: bigint;
    key: string;
    name: string;
}

export interface _api_JobTypeView {
    id: string;
    key: string;
    name: string;
}

export interface EncryptionKeyView {
    id: bigint;
    name: string;
    enabled: boolean;
    optimized: boolean;
    bucketCount: bigint;
    assetCount: bigint;
}

export interface _api_EncryptionKeyView {
    id: string;
    name: string;
    enabled: boolean;
    optimized: boolean;
    bucketCount: string;
    assetCount: string;
}

export interface CreateEncryptionKeyRequest {
    name: string;
    enabled: boolean;
    optimized: boolean;
}

export interface _api_CreateEncryptionKeyRequest {
    name: string;
    enabled: boolean;
    optimized: boolean;
}

export interface ApiHomeResponse {
    serviceName: string;
    apiVersion: string;
}

export interface _api_ApiHomeResponse {
    serviceName: string;
    apiVersion: string;
}

export interface LoginResponse {
    token: string;
}

export interface _api_LoginResponse {
    token: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface _api_LoginRequest {
    username: string;
    password: string;
}

export interface BucketView {
}

export interface _api_BucketView {
}

export interface CreateAssetTagRequest {
    key: string;
    value: string;
}

export interface _api_CreateAssetTagRequest {
    key: string;
    value: string;
}

export interface CreateAssetRequest {
    assetTypeId: bigint;
    encryptionKeyId: bigint | null;
    mediaType: string;
    storeKey: string;
    createAssetTagRequest: CreateAssetTagRequest[];
    parentJobExecutionId: bigint | null;
}

export interface _api_CreateAssetRequest {
    assetTypeId: string;
    encryptionKeyId: string | null;
    mediaType: string;
    storeKey: string;
    createAssetTagRequest: _api_CreateAssetTagRequest[];
    parentJobExecutionId: string | null;
}

export interface GetAssetResponse {
    asset: Asset;
    presignedDownloadUrl: string;
}

export interface _api_GetAssetResponse {
    asset: _api_Asset;
    presignedDownloadUrl: string;
}
