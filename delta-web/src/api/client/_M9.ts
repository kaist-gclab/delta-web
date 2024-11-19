/* eslint-disable */
// auto-generated
'use client';

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import {
    BucketView,
} from './_types';
import {
    _convert__api_BucketView_TO_BucketView_Array,
} from './_converters';
import {
    _Buckets_GET_GetBuckets_url,
} from './_url-builders';
export async function getBuckets(): Promise<BucketView[]> {
    const _response = await _createHttp().get(_Buckets_GET_GetBuckets_url());
    return _restoreCircularReferences(_convert__api_BucketView_TO_BucketView_Array(_response.data), _createObject);
}
export function useSWRGetBuckets(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<BucketView[]>(_shouldFetch ? _Buckets_GET_GetBuckets_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_BucketView_TO_BucketView_Array)] });
}

