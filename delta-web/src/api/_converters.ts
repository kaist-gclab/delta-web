/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _hasOwnPropertyRef, _hasOwnPropertyValues } from './_util';
import { ProcessorNode, ProcessorNodeCapability, _api_ProcessorNode, _api_ProcessorNodeCapability, JobType, Job, _api_JobType, _api_Job, Asset, AssetType, _api_Asset, _api_AssetType, EncryptionKey, _api_EncryptionKey, JobExecution, JobExecutionStatus, _api_JobExecution, _api_JobExecutionStatus, AssetTag, _api_AssetTag, ProcessorNodeStatus, _api_ProcessorNodeStatus, RegisterProcessorNodeRequest, CreateProcessorNodeCapabilityRequest, _api_CreateProcessorNodeCapabilityRequest, _api_RegisterProcessorNodeRequest, UploadTicket, _api_UploadTicket, MonitoringServiceEvent, _api_MonitoringServiceEvent, JobScheduleResponse, _api_JobScheduleResponse, JobScheduleRequest, _api_JobScheduleRequest, CreateJobRequest, _api_CreateJobRequest, AddJobExecutionStatusRequest, _api_AddJobExecutionStatusRequest, CreateEncryptionKeyResponse, EncryptionKeyView, _api_EncryptionKeyView, _api_CreateEncryptionKeyResponse, CreateEncryptionKeyRequest, _api_CreateEncryptionKeyRequest, ApiHomeResponse, _api_ApiHomeResponse, LoginResponse, _api_LoginResponse, LoginRequest, _api_LoginRequest, CreateAssetRequest, CreateAssetTagRequest, _api_CreateAssetTagRequest, _api_CreateAssetRequest, GetAssetResponse, _api_GetAssetResponse, CreateAssetTypeRequest, _api_CreateAssetTypeRequest } from './_types';
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

export function _convert_AssetType_TO__api_AssetType(from: AssetType): _api_AssetType {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_AssetType = {
        id: _convert_bigint_TO_string(from.id),
        key: _convert_string_TO_string(from.key),
        name: _convert_string_TO_string(from.name),
        assets: _convert_Asset_TO__api_Asset_Array(from.assets),
        processorNodeCapabilities: _convert_ProcessorNodeCapability_TO__api_ProcessorNodeCapability_Array(from.processorNodeCapabilities),
    };
    return { ...from, ...to };
}

export function _convert_EncryptionKey_TO__api_EncryptionKey(from: EncryptionKey): _api_EncryptionKey {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_EncryptionKey = {
        id: _convert_bigint_TO_string(from.id),
        name: _convert_string_TO_string(from.name),
        value: _convert_string_TO_string_Nullable(from.value),
        enabled: _convert_boolean_TO_boolean(from.enabled),
        assets: _convert_Asset_TO__api_Asset_Array(from.assets),
    };
    return { ...from, ...to };
}

export function _convert_EncryptionKey_TO__api_EncryptionKey_Nullable(from: EncryptionKey | null): _api_EncryptionKey | null {
    if (from === null) {
        return null;
    }
    return _convert_EncryptionKey_TO__api_EncryptionKey(from);
}

export function _convert_JobExecutionStatus_TO__api_JobExecutionStatus(from: JobExecutionStatus): _api_JobExecutionStatus {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_JobExecutionStatus = {
        id: _convert_bigint_TO_string(from.id),
        jobExecutionId: _convert_bigint_TO_string(from.jobExecutionId),
        timestamp: _convert__Dayjs_TO_string(from.timestamp),
        status: _convert_string_TO_string_Nullable(from.status),
        jobExecution: _convert_JobExecution_TO__api_JobExecution_Nullable(from.jobExecution),
    };
    return { ...from, ...to };
}

export function _convert_JobExecutionStatus_TO__api_JobExecutionStatus_Array(from: JobExecutionStatus[]): _api_JobExecutionStatus[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: JobExecutionStatus[] = (from as any).$values;
        const to: _api_JobExecutionStatus[] = values.map(element => _convert_JobExecutionStatus_TO__api_JobExecutionStatus(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_JobExecutionStatus[] = from.map(element => _convert_JobExecutionStatus_TO__api_JobExecutionStatus(element));
    return to;
}

export function _convert_JobExecution_TO__api_JobExecution(from: JobExecution): _api_JobExecution {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_JobExecution = {
        id: _convert_bigint_TO_string(from.id),
        job: _convert_Job_TO__api_Job(from.job),
        processorNode: _convert_ProcessorNode_TO__api_ProcessorNode(from.processorNode),
        resultAssets: _convert_Asset_TO__api_Asset_Array(from.resultAssets),
        jobExecutionStatuses: _convert_JobExecutionStatus_TO__api_JobExecutionStatus_Array(from.jobExecutionStatuses),
    };
    return { ...from, ...to };
}

export function _convert_JobExecution_TO__api_JobExecution_Nullable(from: JobExecution | null): _api_JobExecution | null {
    if (from === null) {
        return null;
    }
    return _convert_JobExecution_TO__api_JobExecution(from);
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
        mediaType: _convert_string_TO_string(from.mediaType),
        storeKey: _convert_string_TO_string(from.storeKey),
        createdAt: _convert__Dayjs_TO_string(from.createdAt),
        assetType: _convert_AssetType_TO__api_AssetType(from.assetType),
        encryptionKey: _convert_EncryptionKey_TO__api_EncryptionKey_Nullable(from.encryptionKey),
        parentJobExecution: _convert_JobExecution_TO__api_JobExecution_Nullable(from.parentJobExecution),
        inputJobs: _convert_Job_TO__api_Job_Array(from.inputJobs),
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

export function _convert_JobExecution_TO__api_JobExecution_Array(from: JobExecution[]): _api_JobExecution[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: JobExecution[] = (from as any).$values;
        const to: _api_JobExecution[] = values.map(element => _convert_JobExecution_TO__api_JobExecution(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_JobExecution[] = from.map(element => _convert_JobExecution_TO__api_JobExecution(element));
    return to;
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
        jobExecutions: _convert_JobExecution_TO__api_JobExecution_Array(from.jobExecutions),
        assignedProcessorNode: _convert_ProcessorNode_TO__api_ProcessorNode_Nullable(from.assignedProcessorNode),
    };
    return { ...from, ...to };
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
        processorNodeCapabilities: _convert_ProcessorNodeCapability_TO__api_ProcessorNodeCapability_Array(from.processorNodeCapabilities),
    };
    return { ...from, ...to };
}

export function _convert_AssetType_TO__api_AssetType_Nullable(from: AssetType | null): _api_AssetType | null {
    if (from === null) {
        return null;
    }
    return _convert_AssetType_TO__api_AssetType(from);
}

export function _convert_ProcessorNodeCapability_TO__api_ProcessorNodeCapability(from: ProcessorNodeCapability): _api_ProcessorNodeCapability {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_ProcessorNodeCapability = {
        id: _convert_bigint_TO_string(from.id),
        mediaType: _convert_string_TO_string(from.mediaType),
        processorNode: _convert_ProcessorNode_TO__api_ProcessorNode(from.processorNode),
        jobType: _convert_JobType_TO__api_JobType(from.jobType),
        assetType: _convert_AssetType_TO__api_AssetType_Nullable(from.assetType),
    };
    return { ...from, ...to };
}

export function _convert_ProcessorNodeCapability_TO__api_ProcessorNodeCapability_Array(from: ProcessorNodeCapability[]): _api_ProcessorNodeCapability[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: ProcessorNodeCapability[] = (from as any).$values;
        const to: _api_ProcessorNodeCapability[] = values.map(element => _convert_ProcessorNodeCapability_TO__api_ProcessorNodeCapability(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_ProcessorNodeCapability[] = from.map(element => _convert_ProcessorNodeCapability_TO__api_ProcessorNodeCapability(element));
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
        processorNodeCapabilities: _convert_ProcessorNodeCapability_TO__api_ProcessorNodeCapability_Array(from.processorNodeCapabilities),
        jobExecutions: _convert_JobExecution_TO__api_JobExecution_Array(from.jobExecutions),
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

export function _convert__api_AssetType_TO_AssetType(from: _api_AssetType): AssetType {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: AssetType = {
        id: _convert_string_TO_bigint(from.id),
        key: _convert_string_TO_string(from.key),
        name: _convert_string_TO_string(from.name),
        assets: _convert__api_Asset_TO_Asset_Array(from.assets),
        processorNodeCapabilities: _convert__api_ProcessorNodeCapability_TO_ProcessorNodeCapability_Array(from.processorNodeCapabilities),
    };
    return { ...from, ...to };
}

export function _convert__api_EncryptionKey_TO_EncryptionKey(from: _api_EncryptionKey): EncryptionKey {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: EncryptionKey = {
        id: _convert_string_TO_bigint(from.id),
        name: _convert_string_TO_string(from.name),
        value: _convert_string_TO_string_Nullable(from.value),
        enabled: _convert_boolean_TO_boolean(from.enabled),
        assets: _convert__api_Asset_TO_Asset_Array(from.assets),
    };
    return { ...from, ...to };
}

export function _convert__api_EncryptionKey_TO_EncryptionKey_Nullable(from: _api_EncryptionKey | null): EncryptionKey | null {
    if (from === null) {
        return null;
    }
    return _convert__api_EncryptionKey_TO_EncryptionKey(from);
}

export function _convert__api_JobExecutionStatus_TO_JobExecutionStatus(from: _api_JobExecutionStatus): JobExecutionStatus {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: JobExecutionStatus = {
        id: _convert_string_TO_bigint(from.id),
        jobExecutionId: _convert_string_TO_bigint(from.jobExecutionId),
        timestamp: _convert_string_TO__Dayjs(from.timestamp),
        status: _convert_string_TO_string_Nullable(from.status),
        jobExecution: _convert__api_JobExecution_TO_JobExecution_Nullable(from.jobExecution),
    };
    return { ...from, ...to };
}

export function _convert__api_JobExecutionStatus_TO_JobExecutionStatus_Array(from: _api_JobExecutionStatus[]): JobExecutionStatus[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_JobExecutionStatus[] = (from as any).$values;
        const to: JobExecutionStatus[] = values.map(element => _convert__api_JobExecutionStatus_TO_JobExecutionStatus(element));
        return { ...from, $values: to } as any;
    }
    const to: JobExecutionStatus[] = from.map(element => _convert__api_JobExecutionStatus_TO_JobExecutionStatus(element));
    return to;
}

export function _convert__api_JobExecution_TO_JobExecution(from: _api_JobExecution): JobExecution {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: JobExecution = {
        id: _convert_string_TO_bigint(from.id),
        job: _convert__api_Job_TO_Job(from.job),
        processorNode: _convert__api_ProcessorNode_TO_ProcessorNode(from.processorNode),
        resultAssets: _convert__api_Asset_TO_Asset_Array(from.resultAssets),
        jobExecutionStatuses: _convert__api_JobExecutionStatus_TO_JobExecutionStatus_Array(from.jobExecutionStatuses),
    };
    return { ...from, ...to };
}

export function _convert__api_JobExecution_TO_JobExecution_Nullable(from: _api_JobExecution | null): JobExecution | null {
    if (from === null) {
        return null;
    }
    return _convert__api_JobExecution_TO_JobExecution(from);
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
        mediaType: _convert_string_TO_string(from.mediaType),
        storeKey: _convert_string_TO_string(from.storeKey),
        createdAt: _convert_string_TO__Dayjs(from.createdAt),
        assetType: _convert__api_AssetType_TO_AssetType(from.assetType),
        encryptionKey: _convert__api_EncryptionKey_TO_EncryptionKey_Nullable(from.encryptionKey),
        parentJobExecution: _convert__api_JobExecution_TO_JobExecution_Nullable(from.parentJobExecution),
        inputJobs: _convert__api_Job_TO_Job_Array(from.inputJobs),
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

export function _convert__api_JobExecution_TO_JobExecution_Array(from: _api_JobExecution[]): JobExecution[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_JobExecution[] = (from as any).$values;
        const to: JobExecution[] = values.map(element => _convert__api_JobExecution_TO_JobExecution(element));
        return { ...from, $values: to } as any;
    }
    const to: JobExecution[] = from.map(element => _convert__api_JobExecution_TO_JobExecution(element));
    return to;
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
        jobExecutions: _convert__api_JobExecution_TO_JobExecution_Array(from.jobExecutions),
        assignedProcessorNode: _convert__api_ProcessorNode_TO_ProcessorNode_Nullable(from.assignedProcessorNode),
    };
    return { ...from, ...to };
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
        processorNodeCapabilities: _convert__api_ProcessorNodeCapability_TO_ProcessorNodeCapability_Array(from.processorNodeCapabilities),
    };
    return { ...from, ...to };
}

export function _convert__api_AssetType_TO_AssetType_Nullable(from: _api_AssetType | null): AssetType | null {
    if (from === null) {
        return null;
    }
    return _convert__api_AssetType_TO_AssetType(from);
}

export function _convert__api_ProcessorNodeCapability_TO_ProcessorNodeCapability(from: _api_ProcessorNodeCapability): ProcessorNodeCapability {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: ProcessorNodeCapability = {
        id: _convert_string_TO_bigint(from.id),
        mediaType: _convert_string_TO_string(from.mediaType),
        processorNode: _convert__api_ProcessorNode_TO_ProcessorNode(from.processorNode),
        jobType: _convert__api_JobType_TO_JobType(from.jobType),
        assetType: _convert__api_AssetType_TO_AssetType_Nullable(from.assetType),
    };
    return { ...from, ...to };
}

export function _convert__api_ProcessorNodeCapability_TO_ProcessorNodeCapability_Array(from: _api_ProcessorNodeCapability[]): ProcessorNodeCapability[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_ProcessorNodeCapability[] = (from as any).$values;
        const to: ProcessorNodeCapability[] = values.map(element => _convert__api_ProcessorNodeCapability_TO_ProcessorNodeCapability(element));
        return { ...from, $values: to } as any;
    }
    const to: ProcessorNodeCapability[] = from.map(element => _convert__api_ProcessorNodeCapability_TO_ProcessorNodeCapability(element));
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
        processorNodeCapabilities: _convert__api_ProcessorNodeCapability_TO_ProcessorNodeCapability_Array(from.processorNodeCapabilities),
        jobExecutions: _convert__api_JobExecution_TO_JobExecution_Array(from.jobExecutions),
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

export function _convert_MonitoringServiceEvent_TO__api_MonitoringServiceEvent(from: MonitoringServiceEvent): _api_MonitoringServiceEvent {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_MonitoringServiceEvent = {
        eventTimestamp: _convert__Dayjs_TO_string(from.eventTimestamp),
        statsTimestamp: _convert__Dayjs_TO_string(from.statsTimestamp),
        content: _convert_string_TO_string(from.content),
    };
    return { ...from, ...to };
}

export function _convert_MonitoringServiceEvent_TO__api_MonitoringServiceEvent_Array(from: MonitoringServiceEvent[]): _api_MonitoringServiceEvent[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: MonitoringServiceEvent[] = (from as any).$values;
        const to: _api_MonitoringServiceEvent[] = values.map(element => _convert_MonitoringServiceEvent_TO__api_MonitoringServiceEvent(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_MonitoringServiceEvent[] = from.map(element => _convert_MonitoringServiceEvent_TO__api_MonitoringServiceEvent(element));
    return to;
}

export function _convert__api_MonitoringServiceEvent_TO_MonitoringServiceEvent(from: _api_MonitoringServiceEvent): MonitoringServiceEvent {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: MonitoringServiceEvent = {
        eventTimestamp: _convert_string_TO__Dayjs(from.eventTimestamp),
        statsTimestamp: _convert_string_TO__Dayjs(from.statsTimestamp),
        content: _convert_string_TO_string(from.content),
    };
    return { ...from, ...to };
}

export function _convert__api_MonitoringServiceEvent_TO_MonitoringServiceEvent_Array(from: _api_MonitoringServiceEvent[]): MonitoringServiceEvent[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_MonitoringServiceEvent[] = (from as any).$values;
        const to: MonitoringServiceEvent[] = values.map(element => _convert__api_MonitoringServiceEvent_TO_MonitoringServiceEvent(element));
        return { ...from, $values: to } as any;
    }
    const to: MonitoringServiceEvent[] = from.map(element => _convert__api_MonitoringServiceEvent_TO_MonitoringServiceEvent(element));
    return to;
}

export function _convert_JobScheduleResponse_TO__api_JobScheduleResponse(from: JobScheduleResponse): _api_JobScheduleResponse {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_JobScheduleResponse = {
        jobExecution: _convert_JobExecution_TO__api_JobExecution(from.jobExecution),
    };
    return { ...from, ...to };
}

export function _convert__api_JobScheduleResponse_TO_JobScheduleResponse(from: _api_JobScheduleResponse): JobScheduleResponse {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: JobScheduleResponse = {
        jobExecution: _convert__api_JobExecution_TO_JobExecution(from.jobExecution),
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

export function _convert_JobType_TO__api_JobType_Array(from: JobType[]): _api_JobType[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: JobType[] = (from as any).$values;
        const to: _api_JobType[] = values.map(element => _convert_JobType_TO__api_JobType(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_JobType[] = from.map(element => _convert_JobType_TO__api_JobType(element));
    return to;
}

export function _convert__api_JobType_TO_JobType_Array(from: _api_JobType[]): JobType[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_JobType[] = (from as any).$values;
        const to: JobType[] = values.map(element => _convert__api_JobType_TO_JobType(element));
        return { ...from, $values: to } as any;
    }
    const to: JobType[] = from.map(element => _convert__api_JobType_TO_JobType(element));
    return to;
}

export function _convert_EncryptionKey_TO__api_EncryptionKey_Array(from: EncryptionKey[]): _api_EncryptionKey[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: EncryptionKey[] = (from as any).$values;
        const to: _api_EncryptionKey[] = values.map(element => _convert_EncryptionKey_TO__api_EncryptionKey(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_EncryptionKey[] = from.map(element => _convert_EncryptionKey_TO__api_EncryptionKey(element));
    return to;
}

export function _convert__api_EncryptionKey_TO_EncryptionKey_Array(from: _api_EncryptionKey[]): EncryptionKey[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_EncryptionKey[] = (from as any).$values;
        const to: EncryptionKey[] = values.map(element => _convert__api_EncryptionKey_TO_EncryptionKey(element));
        return { ...from, $values: to } as any;
    }
    const to: EncryptionKey[] = from.map(element => _convert__api_EncryptionKey_TO_EncryptionKey(element));
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
    };
    return { ...from, ...to };
}

export function _convert_CreateEncryptionKeyResponse_TO__api_CreateEncryptionKeyResponse(from: CreateEncryptionKeyResponse): _api_CreateEncryptionKeyResponse {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_CreateEncryptionKeyResponse = {
        encryptionKey: _convert_EncryptionKeyView_TO__api_EncryptionKeyView(from.encryptionKey),
        value: _convert_string_TO_string(from.value),
    };
    return { ...from, ...to };
}

export function _convert__api_EncryptionKeyView_TO_EncryptionKeyView(from: _api_EncryptionKeyView): EncryptionKeyView {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: EncryptionKeyView = {
        id: _convert_string_TO_bigint(from.id),
        name: _convert_string_TO_string(from.name),
        enabled: _convert_boolean_TO_boolean(from.enabled),
    };
    return { ...from, ...to };
}

export function _convert__api_CreateEncryptionKeyResponse_TO_CreateEncryptionKeyResponse(from: _api_CreateEncryptionKeyResponse): CreateEncryptionKeyResponse {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: CreateEncryptionKeyResponse = {
        encryptionKey: _convert__api_EncryptionKeyView_TO_EncryptionKeyView(from.encryptionKey),
        value: _convert_string_TO_string(from.value),
    };
    return { ...from, ...to };
}

export function _convert_CreateEncryptionKeyRequest_TO__api_CreateEncryptionKeyRequest(from: CreateEncryptionKeyRequest): _api_CreateEncryptionKeyRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_CreateEncryptionKeyRequest = {
        name: _convert_string_TO_string(from.name),
    };
    return { ...from, ...to };
}

export function _convert__api_CreateEncryptionKeyRequest_TO_CreateEncryptionKeyRequest(from: _api_CreateEncryptionKeyRequest): CreateEncryptionKeyRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: CreateEncryptionKeyRequest = {
        name: _convert_string_TO_string(from.name),
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

export function _convert_AssetType_TO__api_AssetType_Array(from: AssetType[]): _api_AssetType[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: AssetType[] = (from as any).$values;
        const to: _api_AssetType[] = values.map(element => _convert_AssetType_TO__api_AssetType(element));
        return { ...from, $values: to } as any;
    }
    const to: _api_AssetType[] = from.map(element => _convert_AssetType_TO__api_AssetType(element));
    return to;
}

export function _convert__api_AssetType_TO_AssetType_Array(from: _api_AssetType[]): AssetType[] {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    if (_hasOwnPropertyValues(from)) {
        const values: _api_AssetType[] = (from as any).$values;
        const to: AssetType[] = values.map(element => _convert__api_AssetType_TO_AssetType(element));
        return { ...from, $values: to } as any;
    }
    const to: AssetType[] = from.map(element => _convert__api_AssetType_TO_AssetType(element));
    return to;
}

export function _convert_CreateAssetTypeRequest_TO__api_CreateAssetTypeRequest(from: CreateAssetTypeRequest): _api_CreateAssetTypeRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: _api_CreateAssetTypeRequest = {
        key: _convert_string_TO_string(from.key),
        name: _convert_string_TO_string(from.name),
    };
    return { ...from, ...to };
}

export function _convert__api_CreateAssetTypeRequest_TO_CreateAssetTypeRequest(from: _api_CreateAssetTypeRequest): CreateAssetTypeRequest {
    if (_hasOwnPropertyRef(from)) {
        return from as any;
    }
    const to: CreateAssetTypeRequest = {
        key: _convert_string_TO_string(from.key),
        name: _convert_string_TO_string(from.name),
    };
    return { ...from, ...to };
}
