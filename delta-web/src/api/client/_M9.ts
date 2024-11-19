/* eslint-disable */
// auto-generated
'use client';

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import {
    BucketSummary,
    BucketView,
    CreateBucketRequest,
    UpdateBucketRequest,
} from './_types';
import {
    _convert__api_BucketSummary_TO_BucketSummary_Array,
    _convert__api_BucketView_TO_BucketView,
    _convert_CreateBucketRequest_TO__api_CreateBucketRequest,
    _convert_UpdateBucketRequest_TO__api_UpdateBucketRequest,
} from './_converters';
import {
    _Buckets_GET_GetBuckets_url,
    _Buckets_GET_GetBucket_url,
    _Buckets_POST_Create_url,
    _Buckets_DELETE_Delete_url,
    _Buckets_PUT_Update_url,
} from './_url-builders';
export async function getBuckets(): Promise<BucketSummary[]> {
    const _response = await _createHttp().get(_Buckets_GET_GetBuckets_url());
    return _restoreCircularReferences(_convert__api_BucketSummary_TO_BucketSummary_Array(_response.data), _createObject);
}
export function useSWRGetBuckets(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<BucketSummary[]>(_shouldFetch ? _Buckets_GET_GetBuckets_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_BucketSummary_TO_BucketSummary_Array)] });
}
export async function getBucket(id: bigint): Promise<BucketView> {
    const _response = await _createHttp().get(_Buckets_GET_GetBucket_url(id));
    return _restoreCircularReferences(_convert__api_BucketView_TO_BucketView(_response.data), _createObject);
}
export function useSWRGetBucket(id: bigint, _config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<BucketView>(_shouldFetch ? _Buckets_GET_GetBucket_url(id) : null, { ..._config, use: [_createSWRMiddleware(_convert__api_BucketView_TO_BucketView)] });
}
export async function create(createBucketRequest: CreateBucketRequest): Promise<void> {
    await _createHttp().post(_Buckets_POST_Create_url(), _convert_CreateBucketRequest_TO__api_CreateBucketRequest(createBucketRequest));
}
export async function /* delete */ Delete(id: bigint): Promise<void> {
    await _createHttp().delete(_Buckets_DELETE_Delete_url(id));
}
export async function update(id: bigint, updateBucketRequest: UpdateBucketRequest): Promise<void> {
    await _createHttp().put(_Buckets_PUT_Update_url(id), _convert_UpdateBucketRequest_TO__api_UpdateBucketRequest(updateBucketRequest));
}

