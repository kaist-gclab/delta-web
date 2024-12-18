/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _hasOwnPropertyRef, _hasOwnPropertyValues } from './_util';
import {
    ProcessorNode,
    JobRun,
    Job,
    JobType,
    _api_Job,
    _api_JobType,
    Asset,
    AssetTag,
    _api_Asset,
    _api_AssetTag,
    _api_JobRun,
    _api_ProcessorNode,
    ProcessorNodeStatus,
    _api_ProcessorNodeStatus,
    JobRunStatus,
    _api_JobRunStatus,
    RegisterProcessorNodeRequest,
    CreateProcessorNodeCapabilityRequest,
    _api_CreateProcessorNodeCapabilityRequest,
    _api_RegisterProcessorNodeRequest,
    UploadTicket,
    _api_UploadTicket,
    ObjectStorageEvent,
    _api_ObjectStorageEvent,
    ProcessorNodeEvent,
    _api_ProcessorNodeEvent,
    JobEvent,
    _api_JobEvent,
    JobScheduleResponse,
    _api_JobScheduleResponse,
    JobScheduleRequest,
    _api_JobScheduleRequest,
    CreateJobRequest,
    _api_CreateJobRequest,
    AddJobExecutionStatusRequest,
    _api_AddJobExecutionStatusRequest,
    JobTypeView,
    _api_JobTypeView,
    EncryptionKeyView,
    _api_EncryptionKeyView,
    CreateEncryptionKeyRequest,
    _api_CreateEncryptionKeyRequest,
    UpdateEncryptionKeyRequest,
    _api_UpdateEncryptionKeyRequest,
    ApiHomeResponse,
    _api_ApiHomeResponse,
    LoginResponse,
    _api_LoginResponse,
    LoginRequest,
    _api_LoginRequest,
    BucketSummary,
    _api_BucketSummary,
    BucketView,
    BucketTagView,
    _api_BucketTagView,
    _api_BucketView,
    CreateBucketRequest,
    _api_CreateBucketRequest,
    UpdateBucketRequest,
    UpdateBucketRequestBucketTag,
    _api_UpdateBucketRequestBucketTag,
    _api_UpdateBucketRequest,
    CreateAssetRequest,
    CreateAssetTagRequest,
    _api_CreateAssetTagRequest,
    _api_CreateAssetRequest,
    GetAssetResponse,
    _api_GetAssetResponse,
} from './_types';
export function _convert_string_TO_string(from: string): string {
    return from;
}

export function _convert_string_TO_number(from: string): number {
    return Number(from);
}

export function _convert_number_TO_string(from: number): string {
    return from.toString();
}

export function _convert_string_TO_bigint(from: string): bigint {
    return BigInt(from);
}

export function _convert_bigint_TO_string(from: bigint): string {
    return from.toString();
}

export function _convert_boolean_TO_boolean(from: boolean): boolean {
    return from;
}

export function _convert_string_TO__Dayjs(from: string): _Dayjs {
    return _dayjs(from);
}

export function _convert__Dayjs_TO_string(from: _Dayjs): string {
    return from.toISOString();
}

export function _convert_string_TO_string_Nullable(from: string | null): string | null {
    if (from === null) {
        return null;
    }
    return _convert_string_TO_string(from);
}

export function _convert_bigint_TO_string_Nullable(from: bigint | null): string | null {
    if (from === null) {
        return null;
    }
    return _convert_bigint_TO_string(from);
}

export function _convert_Job_TO__api_Job_Array(from: Job[]): _api_Job[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: Job[] = (from as any).$values;
        const to: _api_Job[] = values.map(element => _convert_Job_TO__api_Job(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_Job[] = from.map(element => _convert_Job_TO__api_Job(element));
    return to;
}

export function _convert_JobType_TO__api_JobType(from: JobType): _api_JobType {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_JobType = {
        id: _convert_bigint_TO_string(from.id),
        key: _convert_string_TO_string(from.key),
        name: _convert_string_TO_string(from.name),
        jobs: _convert_Job_TO__api_Job_Array(from.jobs),
    };
    return { ...from, ...to };
}

export function _convert_AssetTag_TO__api_AssetTag(from: AssetTag): _api_AssetTag {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_AssetTag = {
        id: _convert_bigint_TO_string(from.id),
        key: _convert_string_TO_string(from.key),
        value: _convert_string_TO_string(from.value),
        asset: _convert_Asset_TO__api_Asset(from.asset),
    };
    return { ...from, ...to };
}

export function _convert_AssetTag_TO__api_AssetTag_Array(from: AssetTag[]): _api_AssetTag[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: AssetTag[] = (from as any).$values;
        const to: _api_AssetTag[] = values.map(element => _convert_AssetTag_TO__api_AssetTag(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_AssetTag[] = from.map(element => _convert_AssetTag_TO__api_AssetTag(element));
    return to;
}

export function _convert_Asset_TO__api_Asset(from: Asset): _api_Asset {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_Asset = {
        id: _convert_bigint_TO_string(from.id),
        storeKey: _convert_string_TO_string(from.storeKey),
        createdAt: _convert__Dayjs_TO_string(from.createdAt),
        assetTags: _convert_AssetTag_TO__api_AssetTag_Array(from.assetTags),
    };
    return { ...from, ...to };
}

export function _convert_Asset_TO__api_Asset_Nullable(from: Asset | null): _api_Asset | null {
    if (from === null) {
        return null;
    }
    return _convert_Asset_TO__api_Asset(from);
}

export function _convert_ProcessorNode_TO__api_ProcessorNode_Nullable(from: ProcessorNode | null): _api_ProcessorNode | null {
    if (from === null) {
        return null;
    }
    return _convert_ProcessorNode_TO__api_ProcessorNode(from);
}

export function _convert_Job_TO__api_Job(from: Job): _api_Job {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_Job = {
        id: _convert_bigint_TO_string(from.id),
        jobArguments: _convert_string_TO_string(from.jobArguments),
        createdAt: _convert__Dayjs_TO_string(from.createdAt),
        assignedProcessorNodeId: _convert_bigint_TO_string_Nullable(from.assignedProcessorNodeId),
        jobType: _convert_JobType_TO__api_JobType(from.jobType),
        inputAsset: _convert_Asset_TO__api_Asset_Nullable(from.inputAsset),
        jobExecutions: _convert_JobRun_TO__api_JobRun_Array(from.jobExecutions),
        assignedProcessorNode: _convert_ProcessorNode_TO__api_ProcessorNode_Nullable(from.assignedProcessorNode),
    };
    return { ...from, ...to };
}

export function _convert_Asset_TO__api_Asset_Array(from: Asset[]): _api_Asset[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: Asset[] = (from as any).$values;
        const to: _api_Asset[] = values.map(element => _convert_Asset_TO__api_Asset(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_Asset[] = from.map(element => _convert_Asset_TO__api_Asset(element));
    return to;
}

export function _convert_JobRun_TO__api_JobRun_Nullable(from: JobRun | null): _api_JobRun | null {
    if (from === null) {
        return null;
    }
    return _convert_JobRun_TO__api_JobRun(from);
}

export function _convert_JobRunStatus_TO__api_JobRunStatus(from: JobRunStatus): _api_JobRunStatus {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_JobRunStatus = {
        id: _convert_bigint_TO_string(from.id),
        jobExecutionId: _convert_bigint_TO_string(from.jobExecutionId),
        timestamp: _convert__Dayjs_TO_string(from.timestamp),
        status: _convert_string_TO_string_Nullable(from.status),
        jobExecution: _convert_JobRun_TO__api_JobRun_Nullable(from.jobExecution),
    };
    return { ...from, ...to };
}

export function _convert_JobRunStatus_TO__api_JobRunStatus_Array(from: JobRunStatus[]): _api_JobRunStatus[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: JobRunStatus[] = (from as any).$values;
        const to: _api_JobRunStatus[] = values.map(element => _convert_JobRunStatus_TO__api_JobRunStatus(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_JobRunStatus[] = from.map(element => _convert_JobRunStatus_TO__api_JobRunStatus(element));
    return to;
}

export function _convert_JobRun_TO__api_JobRun(from: JobRun): _api_JobRun {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_JobRun = {
        id: _convert_bigint_TO_string(from.id),
        job: _convert_Job_TO__api_Job(from.job),
        processorNode: _convert_ProcessorNode_TO__api_ProcessorNode(from.processorNode),
        resultAssets: _convert_Asset_TO__api_Asset_Array(from.resultAssets),
        jobExecutionStatuses: _convert_JobRunStatus_TO__api_JobRunStatus_Array(from.jobExecutionStatuses),
    };
    return { ...from, ...to };
}

export function _convert_JobRun_TO__api_JobRun_Array(from: JobRun[]): _api_JobRun[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: JobRun[] = (from as any).$values;
        const to: _api_JobRun[] = values.map(element => _convert_JobRun_TO__api_JobRun(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_JobRun[] = from.map(element => _convert_JobRun_TO__api_JobRun(element));
    return to;
}

export function _convert_ProcessorNodeStatus_TO__api_ProcessorNodeStatus(from: ProcessorNodeStatus): _api_ProcessorNodeStatus {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_ProcessorNodeStatus = {
        id: _convert_bigint_TO_string(from.id),
        timestamp: _convert__Dayjs_TO_string(from.timestamp),
        status: _convert_string_TO_string(from.status),
        processorNode: _convert_ProcessorNode_TO__api_ProcessorNode(from.processorNode),
    };
    return { ...from, ...to };
}

export function _convert_ProcessorNodeStatus_TO__api_ProcessorNodeStatus_Array(from: ProcessorNodeStatus[]): _api_ProcessorNodeStatus[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: ProcessorNodeStatus[] = (from as any).$values;
        const to: _api_ProcessorNodeStatus[] = values.map(element => _convert_ProcessorNodeStatus_TO__api_ProcessorNodeStatus(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_ProcessorNodeStatus[] = from.map(element => _convert_ProcessorNodeStatus_TO__api_ProcessorNodeStatus(element));
    return to;
}

export function _convert_ProcessorNode_TO__api_ProcessorNode(from: ProcessorNode): _api_ProcessorNode {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_ProcessorNode = {
        id: _convert_bigint_TO_string(from.id),
        processorVersionId: _convert_bigint_TO_string(from.processorVersionId),
        key: _convert_string_TO_string(from.key),
        name: _convert_string_TO_string_Nullable(from.name),
        jobExecutions: _convert_JobRun_TO__api_JobRun_Array(from.jobExecutions),
        processorNodeStatuses: _convert_ProcessorNodeStatus_TO__api_ProcessorNodeStatus_Array(from.processorNodeStatuses),
        assignedJobs: _convert_Job_TO__api_Job_Array(from.assignedJobs),
    };
    return { ...from, ...to };
}

export function _convert_ProcessorNode_TO__api_ProcessorNode_Array(from: ProcessorNode[]): _api_ProcessorNode[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: ProcessorNode[] = (from as any).$values;
        const to: _api_ProcessorNode[] = values.map(element => _convert_ProcessorNode_TO__api_ProcessorNode(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_ProcessorNode[] = from.map(element => _convert_ProcessorNode_TO__api_ProcessorNode(element));
    return to;
}

export function _convert_string_TO_bigint_Nullable(from: string | null): bigint | null {
    if (from === null) {
        return null;
    }
    return _convert_string_TO_bigint(from);
}

export function _convert__api_Job_TO_Job_Array(from: _api_Job[]): Job[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_Job[] = (from as any).$values;
        const to: Job[] = values.map(element => _convert__api_Job_TO_Job(element));
        return { ...from, $values: to } as any;
    }
    const to: Job[] = from.map(element => _convert__api_Job_TO_Job(element));
    return to;
}

export function _convert__api_JobType_TO_JobType(from: _api_JobType): JobType {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: JobType = {
        id: _convert_string_TO_bigint(from.id),
        key: _convert_string_TO_string(from.key),
        name: _convert_string_TO_string(from.name),
        jobs: _convert__api_Job_TO_Job_Array(from.jobs),
    };
    return { ...from, ...to };
}

export function _convert__api_AssetTag_TO_AssetTag(from: _api_AssetTag): AssetTag {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: AssetTag = {
        id: _convert_string_TO_bigint(from.id),
        key: _convert_string_TO_string(from.key),
        value: _convert_string_TO_string(from.value),
        asset: _convert__api_Asset_TO_Asset(from.asset),
    };
    return { ...from, ...to };
}

export function _convert__api_AssetTag_TO_AssetTag_Array(from: _api_AssetTag[]): AssetTag[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_AssetTag[] = (from as any).$values;
        const to: AssetTag[] = values.map(element => _convert__api_AssetTag_TO_AssetTag(element));
        return { ...from, $values: to } as any;
    }
    const to: AssetTag[] = from.map(element => _convert__api_AssetTag_TO_AssetTag(element));
    return to;
}

export function _convert__api_Asset_TO_Asset(from: _api_Asset): Asset {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: Asset = {
        id: _convert_string_TO_bigint(from.id),
        storeKey: _convert_string_TO_string(from.storeKey),
        createdAt: _convert_string_TO__Dayjs(from.createdAt),
        assetTags: _convert__api_AssetTag_TO_AssetTag_Array(from.assetTags),
    };
    return { ...from, ...to };
}

export function _convert__api_Asset_TO_Asset_Nullable(from: _api_Asset | null): Asset | null {
    if (from === null) {
        return null;
    }
    return _convert__api_Asset_TO_Asset(from);
}

export function _convert__api_ProcessorNode_TO_ProcessorNode_Nullable(from: _api_ProcessorNode | null): ProcessorNode | null {
    if (from === null) {
        return null;
    }
    return _convert__api_ProcessorNode_TO_ProcessorNode(from);
}

export function _convert__api_Job_TO_Job(from: _api_Job): Job {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: Job = {
        id: _convert_string_TO_bigint(from.id),
        jobArguments: _convert_string_TO_string(from.jobArguments),
        createdAt: _convert_string_TO__Dayjs(from.createdAt),
        assignedProcessorNodeId: _convert_string_TO_bigint_Nullable(from.assignedProcessorNodeId),
        jobType: _convert__api_JobType_TO_JobType(from.jobType),
        inputAsset: _convert__api_Asset_TO_Asset_Nullable(from.inputAsset),
        jobExecutions: _convert__api_JobRun_TO_JobRun_Array(from.jobExecutions),
        assignedProcessorNode: _convert__api_ProcessorNode_TO_ProcessorNode_Nullable(from.assignedProcessorNode),
    };
    return { ...from, ...to };
}

export function _convert__api_Asset_TO_Asset_Array(from: _api_Asset[]): Asset[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_Asset[] = (from as any).$values;
        const to: Asset[] = values.map(element => _convert__api_Asset_TO_Asset(element));
        return { ...from, $values: to } as any;
    }
    const to: Asset[] = from.map(element => _convert__api_Asset_TO_Asset(element));
    return to;
}

export function _convert__api_JobRun_TO_JobRun_Nullable(from: _api_JobRun | null): JobRun | null {
    if (from === null) {
        return null;
    }
    return _convert__api_JobRun_TO_JobRun(from);
}

export function _convert__api_JobRunStatus_TO_JobRunStatus(from: _api_JobRunStatus): JobRunStatus {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: JobRunStatus = {
        id: _convert_string_TO_bigint(from.id),
        jobExecutionId: _convert_string_TO_bigint(from.jobExecutionId),
        timestamp: _convert_string_TO__Dayjs(from.timestamp),
        status: _convert_string_TO_string_Nullable(from.status),
        jobExecution: _convert__api_JobRun_TO_JobRun_Nullable(from.jobExecution),
    };
    return { ...from, ...to };
}

export function _convert__api_JobRunStatus_TO_JobRunStatus_Array(from: _api_JobRunStatus[]): JobRunStatus[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_JobRunStatus[] = (from as any).$values;
        const to: JobRunStatus[] = values.map(element => _convert__api_JobRunStatus_TO_JobRunStatus(element));
        return { ...from, $values: to } as any;
    }
    const to: JobRunStatus[] = from.map(element => _convert__api_JobRunStatus_TO_JobRunStatus(element));
    return to;
}

export function _convert__api_JobRun_TO_JobRun(from: _api_JobRun): JobRun {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: JobRun = {
        id: _convert_string_TO_bigint(from.id),
        job: _convert__api_Job_TO_Job(from.job),
        processorNode: _convert__api_ProcessorNode_TO_ProcessorNode(from.processorNode),
        resultAssets: _convert__api_Asset_TO_Asset_Array(from.resultAssets),
        jobExecutionStatuses: _convert__api_JobRunStatus_TO_JobRunStatus_Array(from.jobExecutionStatuses),
    };
    return { ...from, ...to };
}

export function _convert__api_JobRun_TO_JobRun_Array(from: _api_JobRun[]): JobRun[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_JobRun[] = (from as any).$values;
        const to: JobRun[] = values.map(element => _convert__api_JobRun_TO_JobRun(element));
        return { ...from, $values: to } as any;
    }
    const to: JobRun[] = from.map(element => _convert__api_JobRun_TO_JobRun(element));
    return to;
}

export function _convert__api_ProcessorNodeStatus_TO_ProcessorNodeStatus(from: _api_ProcessorNodeStatus): ProcessorNodeStatus {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: ProcessorNodeStatus = {
        id: _convert_string_TO_bigint(from.id),
        timestamp: _convert_string_TO__Dayjs(from.timestamp),
        status: _convert_string_TO_string(from.status),
        processorNode: _convert__api_ProcessorNode_TO_ProcessorNode(from.processorNode),
    };
    return { ...from, ...to };
}

export function _convert__api_ProcessorNodeStatus_TO_ProcessorNodeStatus_Array(from: _api_ProcessorNodeStatus[]): ProcessorNodeStatus[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_ProcessorNodeStatus[] = (from as any).$values;
        const to: ProcessorNodeStatus[] = values.map(element => _convert__api_ProcessorNodeStatus_TO_ProcessorNodeStatus(element));
        return { ...from, $values: to } as any;
    }
    const to: ProcessorNodeStatus[] = from.map(element => _convert__api_ProcessorNodeStatus_TO_ProcessorNodeStatus(element));
    return to;
}

export function _convert__api_ProcessorNode_TO_ProcessorNode(from: _api_ProcessorNode): ProcessorNode {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: ProcessorNode = {
        id: _convert_string_TO_bigint(from.id),
        processorVersionId: _convert_string_TO_bigint(from.processorVersionId),
        key: _convert_string_TO_string(from.key),
        name: _convert_string_TO_string_Nullable(from.name),
        jobExecutions: _convert__api_JobRun_TO_JobRun_Array(from.jobExecutions),
        processorNodeStatuses: _convert__api_ProcessorNodeStatus_TO_ProcessorNodeStatus_Array(from.processorNodeStatuses),
        assignedJobs: _convert__api_Job_TO_Job_Array(from.assignedJobs),
    };
    return { ...from, ...to };
}

export function _convert__api_ProcessorNode_TO_ProcessorNode_Array(from: _api_ProcessorNode[]): ProcessorNode[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_ProcessorNode[] = (from as any).$values;
        const to: ProcessorNode[] = values.map(element => _convert__api_ProcessorNode_TO_ProcessorNode(element));
        return { ...from, $values: to } as any;
    }
    const to: ProcessorNode[] = from.map(element => _convert__api_ProcessorNode_TO_ProcessorNode(element));
    return to;
}

export function _convert_CreateProcessorNodeCapabilityRequest_TO__api_CreateProcessorNodeCapabilityRequest(from: CreateProcessorNodeCapabilityRequest): _api_CreateProcessorNodeCapabilityRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_CreateProcessorNodeCapabilityRequest = {
        jobTypeId: _convert_bigint_TO_string(from.jobTypeId),
        assetTypeId: _convert_bigint_TO_string_Nullable(from.assetTypeId),
        mediaType: _convert_string_TO_string(from.mediaType),
    };
    return { ...from, ...to };
}

export function _convert_CreateProcessorNodeCapabilityRequest_TO__api_CreateProcessorNodeCapabilityRequest_Array(from: CreateProcessorNodeCapabilityRequest[]): _api_CreateProcessorNodeCapabilityRequest[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: CreateProcessorNodeCapabilityRequest[] = (from as any).$values;
        const to: _api_CreateProcessorNodeCapabilityRequest[] = values.map(element => _convert_CreateProcessorNodeCapabilityRequest_TO__api_CreateProcessorNodeCapabilityRequest(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_CreateProcessorNodeCapabilityRequest[] = from.map(element => _convert_CreateProcessorNodeCapabilityRequest_TO__api_CreateProcessorNodeCapabilityRequest(element));
    return to;
}

export function _convert_RegisterProcessorNodeRequest_TO__api_RegisterProcessorNodeRequest(from: RegisterProcessorNodeRequest): _api_RegisterProcessorNodeRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_RegisterProcessorNodeRequest = {
        key: _convert_string_TO_string(from.key),
        capabilities: _convert_CreateProcessorNodeCapabilityRequest_TO__api_CreateProcessorNodeCapabilityRequest_Array(from.capabilities),
    };
    return { ...from, ...to };
}

export function _convert__api_CreateProcessorNodeCapabilityRequest_TO_CreateProcessorNodeCapabilityRequest(from: _api_CreateProcessorNodeCapabilityRequest): CreateProcessorNodeCapabilityRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: CreateProcessorNodeCapabilityRequest = {
        jobTypeId: _convert_string_TO_bigint(from.jobTypeId),
        assetTypeId: _convert_string_TO_bigint_Nullable(from.assetTypeId),
        mediaType: _convert_string_TO_string(from.mediaType),
    };
    return { ...from, ...to };
}

export function _convert__api_CreateProcessorNodeCapabilityRequest_TO_CreateProcessorNodeCapabilityRequest_Array(from: _api_CreateProcessorNodeCapabilityRequest[]): CreateProcessorNodeCapabilityRequest[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_CreateProcessorNodeCapabilityRequest[] = (from as any).$values;
        const to: CreateProcessorNodeCapabilityRequest[] = values.map(element => _convert__api_CreateProcessorNodeCapabilityRequest_TO_CreateProcessorNodeCapabilityRequest(element));
        return { ...from, $values: to } as any;
    }
    const to: CreateProcessorNodeCapabilityRequest[] = from.map(element => _convert__api_CreateProcessorNodeCapabilityRequest_TO_CreateProcessorNodeCapabilityRequest(element));
    return to;
}

export function _convert__api_RegisterProcessorNodeRequest_TO_RegisterProcessorNodeRequest(from: _api_RegisterProcessorNodeRequest): RegisterProcessorNodeRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: RegisterProcessorNodeRequest = {
        key: _convert_string_TO_string(from.key),
        capabilities: _convert__api_CreateProcessorNodeCapabilityRequest_TO_CreateProcessorNodeCapabilityRequest_Array(from.capabilities),
    };
    return { ...from, ...to };
}

export function _convert_UploadTicket_TO__api_UploadTicket(from: UploadTicket): _api_UploadTicket {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_UploadTicket = {
        url: _convert_string_TO_string(from.url),
        storeKey: _convert_string_TO_string(from.storeKey),
    };
    return { ...from, ...to };
}

export function _convert__api_UploadTicket_TO_UploadTicket(from: _api_UploadTicket): UploadTicket {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: UploadTicket = {
        url: _convert_string_TO_string(from.url),
        storeKey: _convert_string_TO_string(from.storeKey),
    };
    return { ...from, ...to };
}

export function _convert_ObjectStorageEvent_TO__api_ObjectStorageEvent(from: ObjectStorageEvent): _api_ObjectStorageEvent {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_ObjectStorageEvent = {
        time: _convert_string_TO_string(from.time),
        content: _convert_string_TO_string(from.content),
    };
    return { ...from, ...to };
}

export function _convert_ObjectStorageEvent_TO__api_ObjectStorageEvent_Array(from: ObjectStorageEvent[]): _api_ObjectStorageEvent[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: ObjectStorageEvent[] = (from as any).$values;
        const to: _api_ObjectStorageEvent[] = values.map(element => _convert_ObjectStorageEvent_TO__api_ObjectStorageEvent(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_ObjectStorageEvent[] = from.map(element => _convert_ObjectStorageEvent_TO__api_ObjectStorageEvent(element));
    return to;
}

export function _convert__api_ObjectStorageEvent_TO_ObjectStorageEvent(from: _api_ObjectStorageEvent): ObjectStorageEvent {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: ObjectStorageEvent = {
        time: _convert_string_TO_string(from.time),
        content: _convert_string_TO_string(from.content),
    };
    return { ...from, ...to };
}

export function _convert__api_ObjectStorageEvent_TO_ObjectStorageEvent_Array(from: _api_ObjectStorageEvent[]): ObjectStorageEvent[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_ObjectStorageEvent[] = (from as any).$values;
        const to: ObjectStorageEvent[] = values.map(element => _convert__api_ObjectStorageEvent_TO_ObjectStorageEvent(element));
        return { ...from, $values: to } as any;
    }
    const to: ObjectStorageEvent[] = from.map(element => _convert__api_ObjectStorageEvent_TO_ObjectStorageEvent(element));
    return to;
}

export function _convert_ProcessorNodeEvent_TO__api_ProcessorNodeEvent(from: ProcessorNodeEvent): _api_ProcessorNodeEvent {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_ProcessorNodeEvent = {
        time: _convert_string_TO_string(from.time),
        content: _convert_string_TO_string(from.content),
    };
    return { ...from, ...to };
}

export function _convert_ProcessorNodeEvent_TO__api_ProcessorNodeEvent_Array(from: ProcessorNodeEvent[]): _api_ProcessorNodeEvent[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: ProcessorNodeEvent[] = (from as any).$values;
        const to: _api_ProcessorNodeEvent[] = values.map(element => _convert_ProcessorNodeEvent_TO__api_ProcessorNodeEvent(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_ProcessorNodeEvent[] = from.map(element => _convert_ProcessorNodeEvent_TO__api_ProcessorNodeEvent(element));
    return to;
}

export function _convert__api_ProcessorNodeEvent_TO_ProcessorNodeEvent(from: _api_ProcessorNodeEvent): ProcessorNodeEvent {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: ProcessorNodeEvent = {
        time: _convert_string_TO_string(from.time),
        content: _convert_string_TO_string(from.content),
    };
    return { ...from, ...to };
}

export function _convert__api_ProcessorNodeEvent_TO_ProcessorNodeEvent_Array(from: _api_ProcessorNodeEvent[]): ProcessorNodeEvent[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_ProcessorNodeEvent[] = (from as any).$values;
        const to: ProcessorNodeEvent[] = values.map(element => _convert__api_ProcessorNodeEvent_TO_ProcessorNodeEvent(element));
        return { ...from, $values: to } as any;
    }
    const to: ProcessorNodeEvent[] = from.map(element => _convert__api_ProcessorNodeEvent_TO_ProcessorNodeEvent(element));
    return to;
}

export function _convert_JobEvent_TO__api_JobEvent(from: JobEvent): _api_JobEvent {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_JobEvent = {
        id: _convert_bigint_TO_string(from.id),
        timestamp: _convert__Dayjs_TO_string(from.timestamp),
        jobArguments: _convert_string_TO_string(from.jobArguments),
    };
    return { ...from, ...to };
}

export function _convert_JobEvent_TO__api_JobEvent_Array(from: JobEvent[]): _api_JobEvent[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: JobEvent[] = (from as any).$values;
        const to: _api_JobEvent[] = values.map(element => _convert_JobEvent_TO__api_JobEvent(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_JobEvent[] = from.map(element => _convert_JobEvent_TO__api_JobEvent(element));
    return to;
}

export function _convert__api_JobEvent_TO_JobEvent(from: _api_JobEvent): JobEvent {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: JobEvent = {
        id: _convert_string_TO_bigint(from.id),
        timestamp: _convert_string_TO__Dayjs(from.timestamp),
        jobArguments: _convert_string_TO_string(from.jobArguments),
    };
    return { ...from, ...to };
}

export function _convert__api_JobEvent_TO_JobEvent_Array(from: _api_JobEvent[]): JobEvent[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_JobEvent[] = (from as any).$values;
        const to: JobEvent[] = values.map(element => _convert__api_JobEvent_TO_JobEvent(element));
        return { ...from, $values: to } as any;
    }
    const to: JobEvent[] = from.map(element => _convert__api_JobEvent_TO_JobEvent(element));
    return to;
}

export function _convert_JobScheduleResponse_TO__api_JobScheduleResponse(from: JobScheduleResponse): _api_JobScheduleResponse {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_JobScheduleResponse = {
        jobRun: _convert_JobRun_TO__api_JobRun(from.jobRun),
    };
    return { ...from, ...to };
}

export function _convert__api_JobScheduleResponse_TO_JobScheduleResponse(from: _api_JobScheduleResponse): JobScheduleResponse {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: JobScheduleResponse = {
        jobRun: _convert__api_JobRun_TO_JobRun(from.jobRun),
    };
    return { ...from, ...to };
}

export function _convert_JobScheduleRequest_TO__api_JobScheduleRequest(from: JobScheduleRequest): _api_JobScheduleRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_JobScheduleRequest = {
        processorNodeId: _convert_bigint_TO_string(from.processorNodeId),
    };
    return { ...from, ...to };
}

export function _convert__api_JobScheduleRequest_TO_JobScheduleRequest(from: _api_JobScheduleRequest): JobScheduleRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: JobScheduleRequest = {
        processorNodeId: _convert_string_TO_bigint(from.processorNodeId),
    };
    return { ...from, ...to };
}

export function _convert_CreateJobRequest_TO__api_CreateJobRequest(from: CreateJobRequest): _api_CreateJobRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_CreateJobRequest = {
        jobTypeId: _convert_bigint_TO_string(from.jobTypeId),
        inputAssetId: _convert_bigint_TO_string_Nullable(from.inputAssetId),
        jobArguments: _convert_string_TO_string(from.jobArguments),
        assignedProcessorNodeId: _convert_bigint_TO_string_Nullable(from.assignedProcessorNodeId),
    };
    return { ...from, ...to };
}

export function _convert__api_CreateJobRequest_TO_CreateJobRequest(from: _api_CreateJobRequest): CreateJobRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: CreateJobRequest = {
        jobTypeId: _convert_string_TO_bigint(from.jobTypeId),
        inputAssetId: _convert_string_TO_bigint_Nullable(from.inputAssetId),
        jobArguments: _convert_string_TO_string(from.jobArguments),
        assignedProcessorNodeId: _convert_string_TO_bigint_Nullable(from.assignedProcessorNodeId),
    };
    return { ...from, ...to };
}

export function _convert_AddJobExecutionStatusRequest_TO__api_AddJobExecutionStatusRequest(from: AddJobExecutionStatusRequest): _api_AddJobExecutionStatusRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_AddJobExecutionStatusRequest = {
        status: _convert_string_TO_string(from.status),
    };
    return { ...from, ...to };
}

export function _convert__api_AddJobExecutionStatusRequest_TO_AddJobExecutionStatusRequest(from: _api_AddJobExecutionStatusRequest): AddJobExecutionStatusRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: AddJobExecutionStatusRequest = {
        status: _convert_string_TO_string(from.status),
    };
    return { ...from, ...to };
}

export function _convert_JobTypeView_TO__api_JobTypeView(from: JobTypeView): _api_JobTypeView {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_JobTypeView = {
        id: _convert_bigint_TO_string(from.id),
        key: _convert_string_TO_string(from.key),
        name: _convert_string_TO_string(from.name),
    };
    return { ...from, ...to };
}

export function _convert_JobTypeView_TO__api_JobTypeView_Array(from: JobTypeView[]): _api_JobTypeView[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: JobTypeView[] = (from as any).$values;
        const to: _api_JobTypeView[] = values.map(element => _convert_JobTypeView_TO__api_JobTypeView(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_JobTypeView[] = from.map(element => _convert_JobTypeView_TO__api_JobTypeView(element));
    return to;
}

export function _convert__api_JobTypeView_TO_JobTypeView(from: _api_JobTypeView): JobTypeView {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: JobTypeView = {
        id: _convert_string_TO_bigint(from.id),
        key: _convert_string_TO_string(from.key),
        name: _convert_string_TO_string(from.name),
    };
    return { ...from, ...to };
}

export function _convert__api_JobTypeView_TO_JobTypeView_Array(from: _api_JobTypeView[]): JobTypeView[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_JobTypeView[] = (from as any).$values;
        const to: JobTypeView[] = values.map(element => _convert__api_JobTypeView_TO_JobTypeView(element));
        return { ...from, $values: to } as any;
    }
    const to: JobTypeView[] = from.map(element => _convert__api_JobTypeView_TO_JobTypeView(element));
    return to;
}

export function _convert_EncryptionKeyView_TO__api_EncryptionKeyView(from: EncryptionKeyView): _api_EncryptionKeyView {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_EncryptionKeyView = {
        id: _convert_bigint_TO_string(from.id),
        name: _convert_string_TO_string(from.name),
        enabled: _convert_boolean_TO_boolean(from.enabled),
        optimized: _convert_boolean_TO_boolean(from.optimized),
        bucketCount: _convert_bigint_TO_string(from.bucketCount),
        assetCount: _convert_bigint_TO_string(from.assetCount),
    };
    return { ...from, ...to };
}

export function _convert_EncryptionKeyView_TO__api_EncryptionKeyView_Array(from: EncryptionKeyView[]): _api_EncryptionKeyView[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: EncryptionKeyView[] = (from as any).$values;
        const to: _api_EncryptionKeyView[] = values.map(element => _convert_EncryptionKeyView_TO__api_EncryptionKeyView(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_EncryptionKeyView[] = from.map(element => _convert_EncryptionKeyView_TO__api_EncryptionKeyView(element));
    return to;
}

export function _convert__api_EncryptionKeyView_TO_EncryptionKeyView(from: _api_EncryptionKeyView): EncryptionKeyView {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: EncryptionKeyView = {
        id: _convert_string_TO_bigint(from.id),
        name: _convert_string_TO_string(from.name),
        enabled: _convert_boolean_TO_boolean(from.enabled),
        optimized: _convert_boolean_TO_boolean(from.optimized),
        bucketCount: _convert_string_TO_bigint(from.bucketCount),
        assetCount: _convert_string_TO_bigint(from.assetCount),
    };
    return { ...from, ...to };
}

export function _convert__api_EncryptionKeyView_TO_EncryptionKeyView_Array(from: _api_EncryptionKeyView[]): EncryptionKeyView[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_EncryptionKeyView[] = (from as any).$values;
        const to: EncryptionKeyView[] = values.map(element => _convert__api_EncryptionKeyView_TO_EncryptionKeyView(element));
        return { ...from, $values: to } as any;
    }
    const to: EncryptionKeyView[] = from.map(element => _convert__api_EncryptionKeyView_TO_EncryptionKeyView(element));
    return to;
}

export function _convert_CreateEncryptionKeyRequest_TO__api_CreateEncryptionKeyRequest(from: CreateEncryptionKeyRequest): _api_CreateEncryptionKeyRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_CreateEncryptionKeyRequest = {
        name: _convert_string_TO_string(from.name),
        enabled: _convert_boolean_TO_boolean(from.enabled),
        optimized: _convert_boolean_TO_boolean(from.optimized),
    };
    return { ...from, ...to };
}

export function _convert__api_CreateEncryptionKeyRequest_TO_CreateEncryptionKeyRequest(from: _api_CreateEncryptionKeyRequest): CreateEncryptionKeyRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: CreateEncryptionKeyRequest = {
        name: _convert_string_TO_string(from.name),
        enabled: _convert_boolean_TO_boolean(from.enabled),
        optimized: _convert_boolean_TO_boolean(from.optimized),
    };
    return { ...from, ...to };
}

export function _convert_UpdateEncryptionKeyRequest_TO__api_UpdateEncryptionKeyRequest(from: UpdateEncryptionKeyRequest): _api_UpdateEncryptionKeyRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_UpdateEncryptionKeyRequest = {
        name: _convert_string_TO_string(from.name),
        enabled: _convert_boolean_TO_boolean(from.enabled),
        optimized: _convert_boolean_TO_boolean(from.optimized),
    };
    return { ...from, ...to };
}

export function _convert__api_UpdateEncryptionKeyRequest_TO_UpdateEncryptionKeyRequest(from: _api_UpdateEncryptionKeyRequest): UpdateEncryptionKeyRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: UpdateEncryptionKeyRequest = {
        name: _convert_string_TO_string(from.name),
        enabled: _convert_boolean_TO_boolean(from.enabled),
        optimized: _convert_boolean_TO_boolean(from.optimized),
    };
    return { ...from, ...to };
}

export function _convert_ApiHomeResponse_TO__api_ApiHomeResponse(from: ApiHomeResponse): _api_ApiHomeResponse {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_ApiHomeResponse = {
        serviceName: _convert_string_TO_string(from.serviceName),
        apiVersion: _convert_string_TO_string(from.apiVersion),
    };
    return { ...from, ...to };
}

export function _convert__api_ApiHomeResponse_TO_ApiHomeResponse(from: _api_ApiHomeResponse): ApiHomeResponse {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: ApiHomeResponse = {
        serviceName: _convert_string_TO_string(from.serviceName),
        apiVersion: _convert_string_TO_string(from.apiVersion),
    };
    return { ...from, ...to };
}

export function _convert_LoginResponse_TO__api_LoginResponse(from: LoginResponse): _api_LoginResponse {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_LoginResponse = {
        token: _convert_string_TO_string(from.token),
    };
    return { ...from, ...to };
}

export function _convert__api_LoginResponse_TO_LoginResponse(from: _api_LoginResponse): LoginResponse {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: LoginResponse = {
        token: _convert_string_TO_string(from.token),
    };
    return { ...from, ...to };
}

export function _convert_LoginRequest_TO__api_LoginRequest(from: LoginRequest): _api_LoginRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_LoginRequest = {
        username: _convert_string_TO_string(from.username),
        password: _convert_string_TO_string(from.password),
    };
    return { ...from, ...to };
}

export function _convert__api_LoginRequest_TO_LoginRequest(from: _api_LoginRequest): LoginRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: LoginRequest = {
        username: _convert_string_TO_string(from.username),
        password: _convert_string_TO_string(from.password),
    };
    return { ...from, ...to };
}

export function _convert_BucketSummary_TO__api_BucketSummary(from: BucketSummary): _api_BucketSummary {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_BucketSummary = {
        id: _convert_bigint_TO_string(from.id),
        encryptionKeyName: _convert_string_TO_string_Nullable(from.encryptionKeyName),
        createdAt: _convert__Dayjs_TO_string(from.createdAt),
        bucketGroupName: _convert_string_TO_string_Nullable(from.bucketGroupName),
        name: _convert_string_TO_string_Nullable(from.name),
        tagCount: _convert_number_TO_string(from.tagCount),
    };
    return { ...from, ...to };
}

export function _convert_BucketSummary_TO__api_BucketSummary_Array(from: BucketSummary[]): _api_BucketSummary[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: BucketSummary[] = (from as any).$values;
        const to: _api_BucketSummary[] = values.map(element => _convert_BucketSummary_TO__api_BucketSummary(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_BucketSummary[] = from.map(element => _convert_BucketSummary_TO__api_BucketSummary(element));
    return to;
}

export function _convert__api_BucketSummary_TO_BucketSummary(from: _api_BucketSummary): BucketSummary {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: BucketSummary = {
        id: _convert_string_TO_bigint(from.id),
        encryptionKeyName: _convert_string_TO_string_Nullable(from.encryptionKeyName),
        createdAt: _convert_string_TO__Dayjs(from.createdAt),
        bucketGroupName: _convert_string_TO_string_Nullable(from.bucketGroupName),
        name: _convert_string_TO_string_Nullable(from.name),
        tagCount: _convert_string_TO_number(from.tagCount),
    };
    return { ...from, ...to };
}

export function _convert__api_BucketSummary_TO_BucketSummary_Array(from: _api_BucketSummary[]): BucketSummary[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_BucketSummary[] = (from as any).$values;
        const to: BucketSummary[] = values.map(element => _convert__api_BucketSummary_TO_BucketSummary(element));
        return { ...from, $values: to } as any;
    }
    const to: BucketSummary[] = from.map(element => _convert__api_BucketSummary_TO_BucketSummary(element));
    return to;
}

export function _convert_BucketTagView_TO__api_BucketTagView(from: BucketTagView): _api_BucketTagView {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_BucketTagView = {
        id: _convert_bigint_TO_string(from.id),
        key: _convert_string_TO_string(from.key),
        value: _convert_string_TO_string(from.value),
    };
    return { ...from, ...to };
}

export function _convert_BucketTagView_TO__api_BucketTagView_Array(from: BucketTagView[]): _api_BucketTagView[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: BucketTagView[] = (from as any).$values;
        const to: _api_BucketTagView[] = values.map(element => _convert_BucketTagView_TO__api_BucketTagView(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_BucketTagView[] = from.map(element => _convert_BucketTagView_TO__api_BucketTagView(element));
    return to;
}

export function _convert_BucketView_TO__api_BucketView(from: BucketView): _api_BucketView {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_BucketView = {
        id: _convert_bigint_TO_string(from.id),
        encryptionKeyName: _convert_string_TO_string_Nullable(from.encryptionKeyName),
        createdAt: _convert__Dayjs_TO_string(from.createdAt),
        bucketGroupName: _convert_string_TO_string_Nullable(from.bucketGroupName),
        tags: _convert_BucketTagView_TO__api_BucketTagView_Array(from.tags),
        inputBucketSummaries: _convert_BucketSummary_TO__api_BucketSummary_Array(from.inputBucketSummaries),
    };
    return { ...from, ...to };
}

export function _convert__api_BucketTagView_TO_BucketTagView(from: _api_BucketTagView): BucketTagView {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: BucketTagView = {
        id: _convert_string_TO_bigint(from.id),
        key: _convert_string_TO_string(from.key),
        value: _convert_string_TO_string(from.value),
    };
    return { ...from, ...to };
}

export function _convert__api_BucketTagView_TO_BucketTagView_Array(from: _api_BucketTagView[]): BucketTagView[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_BucketTagView[] = (from as any).$values;
        const to: BucketTagView[] = values.map(element => _convert__api_BucketTagView_TO_BucketTagView(element));
        return { ...from, $values: to } as any;
    }
    const to: BucketTagView[] = from.map(element => _convert__api_BucketTagView_TO_BucketTagView(element));
    return to;
}

export function _convert__api_BucketView_TO_BucketView(from: _api_BucketView): BucketView {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: BucketView = {
        id: _convert_string_TO_bigint(from.id),
        encryptionKeyName: _convert_string_TO_string_Nullable(from.encryptionKeyName),
        createdAt: _convert_string_TO__Dayjs(from.createdAt),
        bucketGroupName: _convert_string_TO_string_Nullable(from.bucketGroupName),
        tags: _convert__api_BucketTagView_TO_BucketTagView_Array(from.tags),
        inputBucketSummaries: _convert__api_BucketSummary_TO_BucketSummary_Array(from.inputBucketSummaries),
    };
    return { ...from, ...to };
}

export function _convert_CreateBucketRequest_TO__api_CreateBucketRequest(from: CreateBucketRequest): _api_CreateBucketRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_CreateBucketRequest = {
        encryptionKeyName: _convert_string_TO_string(from.encryptionKeyName),
        name: _convert_string_TO_string(from.name),
    };
    return { ...from, ...to };
}

export function _convert__api_CreateBucketRequest_TO_CreateBucketRequest(from: _api_CreateBucketRequest): CreateBucketRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: CreateBucketRequest = {
        encryptionKeyName: _convert_string_TO_string(from.encryptionKeyName),
        name: _convert_string_TO_string(from.name),
    };
    return { ...from, ...to };
}

export function _convert_UpdateBucketRequestBucketTag_TO__api_UpdateBucketRequestBucketTag(from: UpdateBucketRequestBucketTag): _api_UpdateBucketRequestBucketTag {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_UpdateBucketRequestBucketTag = {
        key: _convert_string_TO_string(from.key),
        value: _convert_string_TO_string(from.value),
    };
    return { ...from, ...to };
}

export function _convert_UpdateBucketRequestBucketTag_TO__api_UpdateBucketRequestBucketTag_Array(from: UpdateBucketRequestBucketTag[]): _api_UpdateBucketRequestBucketTag[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: UpdateBucketRequestBucketTag[] = (from as any).$values;
        const to: _api_UpdateBucketRequestBucketTag[] = values.map(element => _convert_UpdateBucketRequestBucketTag_TO__api_UpdateBucketRequestBucketTag(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_UpdateBucketRequestBucketTag[] = from.map(element => _convert_UpdateBucketRequestBucketTag_TO__api_UpdateBucketRequestBucketTag(element));
    return to;
}

export function _convert_UpdateBucketRequest_TO__api_UpdateBucketRequest(from: UpdateBucketRequest): _api_UpdateBucketRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_UpdateBucketRequest = {
        tags: _convert_UpdateBucketRequestBucketTag_TO__api_UpdateBucketRequestBucketTag_Array(from.tags),
    };
    return { ...from, ...to };
}

export function _convert__api_UpdateBucketRequestBucketTag_TO_UpdateBucketRequestBucketTag(from: _api_UpdateBucketRequestBucketTag): UpdateBucketRequestBucketTag {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: UpdateBucketRequestBucketTag = {
        key: _convert_string_TO_string(from.key),
        value: _convert_string_TO_string(from.value),
    };
    return { ...from, ...to };
}

export function _convert__api_UpdateBucketRequestBucketTag_TO_UpdateBucketRequestBucketTag_Array(from: _api_UpdateBucketRequestBucketTag[]): UpdateBucketRequestBucketTag[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_UpdateBucketRequestBucketTag[] = (from as any).$values;
        const to: UpdateBucketRequestBucketTag[] = values.map(element => _convert__api_UpdateBucketRequestBucketTag_TO_UpdateBucketRequestBucketTag(element));
        return { ...from, $values: to } as any;
    }
    const to: UpdateBucketRequestBucketTag[] = from.map(element => _convert__api_UpdateBucketRequestBucketTag_TO_UpdateBucketRequestBucketTag(element));
    return to;
}

export function _convert__api_UpdateBucketRequest_TO_UpdateBucketRequest(from: _api_UpdateBucketRequest): UpdateBucketRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: UpdateBucketRequest = {
        tags: _convert__api_UpdateBucketRequestBucketTag_TO_UpdateBucketRequestBucketTag_Array(from.tags),
    };
    return { ...from, ...to };
}

export function _convert_CreateAssetTagRequest_TO__api_CreateAssetTagRequest(from: CreateAssetTagRequest): _api_CreateAssetTagRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_CreateAssetTagRequest = {
        key: _convert_string_TO_string(from.key),
        value: _convert_string_TO_string(from.value),
    };
    return { ...from, ...to };
}

export function _convert_CreateAssetTagRequest_TO__api_CreateAssetTagRequest_Array(from: CreateAssetTagRequest[]): _api_CreateAssetTagRequest[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: CreateAssetTagRequest[] = (from as any).$values;
        const to: _api_CreateAssetTagRequest[] = values.map(element => _convert_CreateAssetTagRequest_TO__api_CreateAssetTagRequest(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_CreateAssetTagRequest[] = from.map(element => _convert_CreateAssetTagRequest_TO__api_CreateAssetTagRequest(element));
    return to;
}

export function _convert_CreateAssetRequest_TO__api_CreateAssetRequest(from: CreateAssetRequest): _api_CreateAssetRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_CreateAssetRequest = {
        assetTypeId: _convert_bigint_TO_string(from.assetTypeId),
        encryptionKeyId: _convert_bigint_TO_string_Nullable(from.encryptionKeyId),
        mediaType: _convert_string_TO_string(from.mediaType),
        storeKey: _convert_string_TO_string(from.storeKey),
        createAssetTagRequest: _convert_CreateAssetTagRequest_TO__api_CreateAssetTagRequest_Array(from.createAssetTagRequest),
        parentJobExecutionId: _convert_bigint_TO_string_Nullable(from.parentJobExecutionId),
    };
    return { ...from, ...to };
}

export function _convert__api_CreateAssetTagRequest_TO_CreateAssetTagRequest(from: _api_CreateAssetTagRequest): CreateAssetTagRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: CreateAssetTagRequest = {
        key: _convert_string_TO_string(from.key),
        value: _convert_string_TO_string(from.value),
    };
    return { ...from, ...to };
}

export function _convert__api_CreateAssetTagRequest_TO_CreateAssetTagRequest_Array(from: _api_CreateAssetTagRequest[]): CreateAssetTagRequest[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_CreateAssetTagRequest[] = (from as any).$values;
        const to: CreateAssetTagRequest[] = values.map(element => _convert__api_CreateAssetTagRequest_TO_CreateAssetTagRequest(element));
        return { ...from, $values: to } as any;
    }
    const to: CreateAssetTagRequest[] = from.map(element => _convert__api_CreateAssetTagRequest_TO_CreateAssetTagRequest(element));
    return to;
}

export function _convert__api_CreateAssetRequest_TO_CreateAssetRequest(from: _api_CreateAssetRequest): CreateAssetRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: CreateAssetRequest = {
        assetTypeId: _convert_string_TO_bigint(from.assetTypeId),
        encryptionKeyId: _convert_string_TO_bigint_Nullable(from.encryptionKeyId),
        mediaType: _convert_string_TO_string(from.mediaType),
        storeKey: _convert_string_TO_string(from.storeKey),
        createAssetTagRequest: _convert__api_CreateAssetTagRequest_TO_CreateAssetTagRequest_Array(from.createAssetTagRequest),
        parentJobExecutionId: _convert_string_TO_bigint_Nullable(from.parentJobExecutionId),
    };
    return { ...from, ...to };
}

export function _convert_GetAssetResponse_TO__api_GetAssetResponse(from: GetAssetResponse): _api_GetAssetResponse {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_GetAssetResponse = {
        asset: _convert_Asset_TO__api_Asset(from.asset),
        presignedDownloadUrl: _convert_string_TO_string(from.presignedDownloadUrl),
    };
    return { ...from, ...to };
}

export function _convert__api_GetAssetResponse_TO_GetAssetResponse(from: _api_GetAssetResponse): GetAssetResponse {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: GetAssetResponse = {
        asset: _convert__api_Asset_TO_Asset(from.asset),
        presignedDownloadUrl: _convert_string_TO_string(from.presignedDownloadUrl),
    };
    return { ...from, ...to };
}
