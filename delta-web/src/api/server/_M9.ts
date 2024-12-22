/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import {
    BucketSummary,
    BucketView,
    CreateBucketRequest,
    UpdateBucketRequest,
    AddBucketItemRequest,
    BucketItemView,
    MergeBucketsRequest,
} from './_types';
import {
    _convert__api_BucketSummary_TO_BucketSummary_Array,
    _convert__api_BucketView_TO_BucketView,
    _convert_CreateBucketRequest_TO__api_CreateBucketRequest,
    _convert_UpdateBucketRequest_TO__api_UpdateBucketRequest,
    _convert_AddBucketItemRequest_TO__api_AddBucketItemRequest,
    _convert__api_BucketItemView_TO_BucketItemView_Array,
    _convert__api_BucketItemView_TO_BucketItemView,
    _convert_MergeBucketsRequest_TO__api_MergeBucketsRequest,
} from './_converters';
import {
    _Buckets_GET_GetBuckets_url,
    _Buckets_GET_GetBucket_url,
    _Buckets_POST_Create_url,
    _Buckets_DELETE_Delete_url,
    _Buckets_PUT_Update_url,
    _Buckets_POST_AddItem_url,
    _Buckets_GET_GetItems_url,
    _Buckets_GET_GetItem_url,
    _Buckets_POST_Duplicate_url,
    _Buckets_POST_Merge_url,
} from './_url-builders';
export async function getBuckets(): Promise<BucketSummary[]> {
    const _response = await _createHttp().get(_Buckets_GET_GetBuckets_url());
    return _restoreCircularReferences(_convert__api_BucketSummary_TO_BucketSummary_Array(_response.data), _createObject);
}
export async function getBucket(id: bigint): Promise<BucketView> {
    const _response = await _createHttp().get(_Buckets_GET_GetBucket_url(id));
    return _restoreCircularReferences(_convert__api_BucketView_TO_BucketView(_response.data), _createObject);
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
export async function addItem(bucketId: bigint, addItemRequest: AddBucketItemRequest): Promise<void> {
    await _createHttp().post(_Buckets_POST_AddItem_url(bucketId), _convert_AddBucketItemRequest_TO__api_AddBucketItemRequest(addItemRequest));
}
export async function getItems(bucketId: bigint): Promise<BucketItemView[]> {
    const _response = await _createHttp().get(_Buckets_GET_GetItems_url(bucketId));
    return _restoreCircularReferences(_convert__api_BucketItemView_TO_BucketItemView_Array(_response.data), _createObject);
}
export async function getItem(itemId: bigint): Promise<BucketItemView> {
    const _response = await _createHttp().get(_Buckets_GET_GetItem_url(itemId));
    return _restoreCircularReferences(_convert__api_BucketItemView_TO_BucketItemView(_response.data), _createObject);
}
export async function duplicate(bucketId: bigint): Promise<void> {
    await _createHttp().post(_Buckets_POST_Duplicate_url(bucketId));
}
export async function merge(request: MergeBucketsRequest): Promise<void> {
    await _createHttp().post(_Buckets_POST_Merge_url(), _convert_MergeBucketsRequest_TO__api_MergeBucketsRequest(request));
}

