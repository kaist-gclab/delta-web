/* eslint-disable */
// auto-generated
'use client';

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import {
    AssetTypeView,
    CreateAssetTypeRequest,
} from './_types';
import {
    _convert__api_AssetTypeView_TO_AssetTypeView_Array,
    _convert_CreateAssetTypeRequest_TO__api_CreateAssetTypeRequest,
} from './_converters';
import {
    _AssetTypes_GET_GetAssetTypes_url,
    _AssetTypes_POST_Create_url,
} from './_url-builders';
export async function getAssetTypes(): Promise<AssetTypeView[]> {
    const _response = await _createHttp().get(_AssetTypes_GET_GetAssetTypes_url());
    return _restoreCircularReferences(_convert__api_AssetTypeView_TO_AssetTypeView_Array(_response.data), _createObject);
}
export function useSWRGetAssetTypes(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<AssetTypeView[]>(_shouldFetch ? _AssetTypes_GET_GetAssetTypes_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_AssetTypeView_TO_AssetTypeView_Array)] });
}
export async function create(createAssetTypeRequest: CreateAssetTypeRequest): Promise<void> {
    await _createHttp().post(_AssetTypes_POST_Create_url(), _convert_CreateAssetTypeRequest_TO__api_CreateAssetTypeRequest(createAssetTypeRequest));
}

