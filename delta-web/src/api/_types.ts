/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

export interface _api_AssetType {
    id: string;
    key: string;
    name: string;
    assets: _api_Asset[];
    processorNodeCapabilities: _api_ProcessorNodeCapability[];
}

export interface EncryptionKey {
    id: bigint;
    name: string;
    value: string | null;
    enabled: boolean;
    assets: Asset[];
}

export interface _api_EncryptionKey {
    id: string;
    name: string;
    value: string | null;
    enabled: boolean;
    assets: _api_Asset[];
}

export interface _api_JobExecutionStatus {
    id: string;
    jobExecutionId: string;
    timestamp: string;
    status: string | null;
    jobExecution: _api_JobExecution | null;
}

export interface _api_JobExecution {
    id: string;
    jobId: string;
    processorNodeId: string;
    job: _api_Job;
    processorNode: _api_ProcessorNode;
    resultAssets: _api_Asset[];
    jobExecutionStatuses: _api_JobExecutionStatus[];
}

export interface JobExecutionStatus {
    id: bigint;
    jobExecutionId: bigint;
    timestamp: _Dayjs;
    status: string | null;
    jobExecution: JobExecution | null;
}

export interface JobExecution {
    id: bigint;
    jobId: bigint;
    processorNodeId: bigint;
    job: Job;
    processorNode: ProcessorNode;
    resultAssets: Asset[];
    jobExecutionStatuses: JobExecutionStatus[];
}

export interface AssetTag {
    id: bigint;
    assetId: bigint;
    key: string;
    value: string;
    asset: Asset;
}

export interface _api_AssetTag {
    id: string;
    assetId: string;
    key: string;
    value: string;
    asset: _api_Asset;
}

export interface _api_Asset {
    id: string;
    assetTypeId: string;
    encryptionKeyId: string | null;
    mediaType: string;
    storeKey: string;
    parentJobExecutionId: string | null;
    createdAt: string;
    assetType: _api_AssetType;
    encryptionKey: _api_EncryptionKey | null;
    parentJobExecution: _api_JobExecution | null;
    inputJobs: _api_Job[];
    assetTags: _api_AssetTag[];
}

export interface AssetType {
    id: bigint;
    key: string;
    name: string;
    assets: Asset[];
    processorNodeCapabilities: ProcessorNodeCapability[];
}

export interface Asset {
    id: bigint;
    assetTypeId: bigint;
    encryptionKeyId: bigint | null;
    mediaType: string;
    storeKey: string;
    parentJobExecutionId: bigint | null;
    createdAt: _Dayjs;
    assetType: AssetType;
    encryptionKey: EncryptionKey | null;
    parentJobExecution: JobExecution | null;
    inputJobs: Job[];
    assetTags: AssetTag[];
}

export interface _api_Job {
    id: string;
    jobTypeId: string;
    inputAssetId: string | null;
    jobArguments: string;
    createdAt: string;
    assignedProcessorNodeId: string | null;
    jobType: _api_JobType;
    inputAsset: _api_Asset | null;
    jobExecutions: _api_JobExecution[];
    assignedProcessorNode: _api_ProcessorNode | null;
}

export interface _api_JobType {
    id: string;
    key: string;
    name: string;
    jobs: _api_Job[];
    processorNodeCapabilities: _api_ProcessorNodeCapability[];
}

export interface Job {
    id: bigint;
    jobTypeId: bigint;
    inputAssetId: bigint | null;
    jobArguments: string;
    createdAt: _Dayjs;
    assignedProcessorNodeId: bigint | null;
    jobType: JobType;
    inputAsset: Asset | null;
    jobExecutions: JobExecution[];
    assignedProcessorNode: ProcessorNode | null;
}

export interface JobType {
    id: bigint;
    key: string;
    name: string;
    jobs: Job[];
    processorNodeCapabilities: ProcessorNodeCapability[];
}

export interface _api_ProcessorNodeCapability {
    id: string;
    processorNodeId: string;
    jobTypeId: string;
    assetTypeId: string | null;
    mediaType: string;
    processorNode: _api_ProcessorNode;
    jobType: _api_JobType;
    assetType: _api_AssetType | null;
}

export interface ProcessorNodeStatus {
    id: bigint;
    processorNodeId: bigint;
    timestamp: _Dayjs;
    status: string;
    processorNode: ProcessorNode;
}

export interface _api_ProcessorNodeStatus {
    id: string;
    processorNodeId: string;
    timestamp: string;
    status: string;
    processorNode: _api_ProcessorNode;
}

export interface _api_ProcessorNode {
    id: string;
    processorVersionId: string;
    key: string;
    name: string | null;
    processorNodeCapabilities: _api_ProcessorNodeCapability[];
    jobExecutions: _api_JobExecution[];
    processorNodeStatuses: _api_ProcessorNodeStatus[];
    assignedJobs: _api_Job[];
}

export interface ProcessorNodeCapability {
    id: bigint;
    processorNodeId: bigint;
    jobTypeId: bigint;
    assetTypeId: bigint | null;
    mediaType: string;
    processorNode: ProcessorNode;
    jobType: JobType;
    assetType: AssetType | null;
}

export interface ProcessorNode {
    id: bigint;
    processorVersionId: bigint;
    key: string;
    name: string | null;
    processorNodeCapabilities: ProcessorNodeCapability[];
    jobExecutions: JobExecution[];
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

export interface MonitoringServiceEvent {
    eventTimestamp: _Dayjs;
    statsTimestamp: _Dayjs;
    content: string;
}

export interface _api_MonitoringServiceEvent {
    eventTimestamp: string;
    statsTimestamp: string;
    content: string;
}

export interface JobScheduleResponse {
    jobExecution: JobExecution;
}

export interface _api_JobScheduleResponse {
    jobExecution: _api_JobExecution;
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

export interface CreateEncryptionKeyResponse {
    encryptionKey: EncryptionKey;
    value: string;
}

export interface _api_CreateEncryptionKeyResponse {
    encryptionKey: _api_EncryptionKey;
    value: string;
}

export interface CreateEncryptionKeyRequest {
    name: string;
}

export interface _api_CreateEncryptionKeyRequest {
    name: string;
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

export interface CreateAssetTypeRequest {
    key: string;
    name: string;
}

export interface _api_CreateAssetTypeRequest {
    key: string;
    name: string;
}
