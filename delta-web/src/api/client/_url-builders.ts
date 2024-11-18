/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import {  } from './_converters';
export function _ProcessorNodes_GET_GetNodes_url(): string {
    return `api/1/processor-nodes`;
}

export function _ProcessorNodes_POST_RegisterProcessorNode_url(): string {
    return `api/1/processor-nodes/register`;
}

export function _ObjectStorage_GET_GetUploadUrl_url(): string {
    return `api/1/object-storage/upload-url`;
}

export function _Monitoring_GET_GetObjectStorageEvents_url(): string {
    return `api/1/monitoring/object-storage`;
}

export function _Monitoring_GET_GetProcessorNodeEvents_url(): string {
    return `api/1/monitoring/processor-node`;
}

export function _Monitoring_GET_GetJobEvents_url(): string {
    return `api/1/monitoring/job`;
}

export function _Jobs_GET_GetJobs_url(): string {
    return `api/1/jobs`;
}

export function _Jobs_POST_Schedule_url(): string {
    return `api/1/jobs/schedule`;
}

export function _Jobs_POST_CreateJob_url(): string {
    return `api/1/jobs`;
}

export function _Jobs_POST_AddJobExecutionStatus_url(jobExecutionId: bigint): string {
    return `api/1/jobs/executions/${jobExecutionId.toString()}/statuses`;
}

export function _JobTypes_GET_GetJobTypes_url(): string {
    return `api/1/job-types`;
}

export function _EncryptionKeys_GET_GetEncryptionKeys_url(): string {
    return `api/1/encryption-keys`;
}

export function _EncryptionKeys_POST_Create_url(): string {
    return `api/1/encryption-keys`;
}

export function _Home_GET_Home_url(): string {
    return ``;
}

export function _Home_GET_ApiHome_url(): string {
    return `api/1`;
}

export function _Auth_POST_Login_url(): string {
    return `auth/1/login`;
}

export function _Assets_GET_GetAssets_url(): string {
    return `api/1/assets`;
}

export function _Assets_POST_CreateAsset_url(): string {
    return `api/1/assets`;
}

export function _Assets_GET_GetAsset_url(id: bigint): string {
    return `api/1/assets/${id.toString()}`;
}

export function _AssetTypes_GET_GetAssetTypes_url(): string {
    return `api/1/asset-types`;
}

export function _AssetTypes_POST_Create_url(): string {
    return `api/1/asset-types`;
}
