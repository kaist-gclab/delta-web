/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import { Asset, AssetType, _api_Asset, _api_AssetType, CreateAssetTypeRequest, _api_CreateAssetTypeRequest } from './_types';
import { _convert__api_AssetType_TO_AssetType, _convert__api_AssetType_TO_AssetType_Array, _convert_CreateAssetTypeRequest_TO__api_CreateAssetTypeRequest } from './_converters';
import { _AssetTypes_GET_GetAssetTypes_url, _AssetTypes_POST_Create_url } from './_url-builders';
export async function getAssetTypes(): Promise<AssetType[]> {
    const _response = await _createHttp().get(_AssetTypes_GET_GetAssetTypes_url());
    return restoreCircularReferences(_convert__api_AssetType_TO_AssetType_Array(_response.data), _createObject);
}
export function useSWRGetAssetTypes(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<AssetType[]>(_shouldFetch ? _AssetTypes_GET_GetAssetTypes_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_AssetType_TO_AssetType_Array)] });
}
export async function create(createAssetTypeRequest: CreateAssetTypeRequest): Promise<AssetType> {
    const _response = await _createHttp().post(_AssetTypes_POST_Create_url(), _convert_CreateAssetTypeRequest_TO__api_CreateAssetTypeRequest(createAssetTypeRequest));
    return restoreCircularReferences(_convert__api_AssetType_TO_AssetType(_response.data), _createObject);
}

