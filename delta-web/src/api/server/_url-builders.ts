/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import {
    _convert_string_TO_string,
} from './_converters';
export function _Users_POST_ChangePassword_url(): string {
    return `users/me/password`;
}

export function _Settings_PUT_SetSetting_url(): string {
    return `settings`;
}

export function _ProcessorNodes_GET_GetNodes_url(): string {
    return `api/1/processor-nodes`;
}

export function _ProcessorNodes_POST_RegisterProcessorNode_url(): string {
    return `api/1/processor-nodes/register`;
}

export function _ProcessorNodes_GET_GetNode_url(id: bigint): string {
    return `api/1/processor-nodes/${id.toString()}`;
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

export function _JobTypes_GET_GetJobTypes_url(): string {
    return `api/1/job-types`;
}

export function _JobTypes_POST_CreateJobType_url(): string {
    return `api/1/job-types`;
}

export function _JobTypes_GET_GetJobType_url(id: bigint): string {
    return `api/1/job-types/${id.toString()}`;
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

export function _EncryptionKeys_GET_GetEncryptionKeys_url(): string {
    return `api/1/encryption-keys`;
}

export function _EncryptionKeys_GET_GetEncryptionKey_url(id: bigint): string {
    return `api/1/encryption-keys/${id.toString()}`;
}

export function _EncryptionKeys_POST_Create_url(): string {
    return `api/1/encryption-keys`;
}

export function _EncryptionKeys_DELETE_Delete_url(id: bigint): string {
    return `api/1/encryption-keys/${id.toString()}`;
}

export function _EncryptionKeys_PUT_Update_url(id: bigint): string {
    return `api/1/encryption-keys/${id.toString()}`;
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

export function _Buckets_GET_GetBuckets_url(): string {
    return `api/1/buckets`;
}

export function _Buckets_GET_GetBucket_url(id: bigint): string {
    return `api/1/buckets/${id.toString()}`;
}

export function _Buckets_POST_Create_url(): string {
    return `api/1/buckets`;
}

export function _Buckets_DELETE_Delete_url(id: bigint): string {
    return `api/1/buckets/${id.toString()}`;
}

export function _Buckets_PUT_Update_url(id: bigint): string {
    return `api/1/buckets/${id.toString()}`;
}

export function _Buckets_POST_AddAsset_url(bucketId: bigint): string {
    return `api/1/buckets/${bucketId.toString()}/assets`;
}

export function _Buckets_GET_GetAssets_url(bucketId: bigint): string {
    return `api/1/buckets/${bucketId.toString()}/assets`;
}

export function _Buckets_GET_GetAsset_url(bucketId: bigint, path: string): string {
    const _params = new URLSearchParams();
    const _converted_path = _convert_string_TO_string(path);
    if (_converted_path !== null) {
        _params.append('path', _converted_path.toString());
    }
    const _queryString = _params.toString();
    return `api/1/buckets/${bucketId.toString()}/asset`+ (_queryString.length ? '?' + _queryString : '');
}

export function _Buckets_POST_Duplicate_url(bucketId: bigint): string {
    return `api/1/buckets/${bucketId.toString()}/duplicate`;
}

export function _Buckets_POST_Merge_url(): string {
    return `api/1/buckets/merge`;
}
