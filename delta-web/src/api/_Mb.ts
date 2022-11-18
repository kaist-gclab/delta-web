/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import { Asset, _api_Asset, CreateAssetRequest, _api_CreateAssetRequest, GetAssetResponse, _api_GetAssetResponse } from './_types';
import { _convert__api_Asset_TO_Asset, _convert__api_Asset_TO_Asset_Array, _convert_CreateAssetRequest_TO__api_CreateAssetRequest, _convert__api_GetAssetResponse_TO_GetAssetResponse } from './_converters';
import { _Assets_GET_GetAssets_url, _Assets_POST_CreateAsset_url, _Assets_GET_GetAsset_url } from './_url-builders';
export async function getAssets(): Promise<Asset[]> {
    const _response = await _createHttp().get(_Assets_GET_GetAssets_url());
    return restoreCircularReferences(_convert__api_Asset_TO_Asset_Array(_response.data), _createObject);
}
export function useSWRGetAssets(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<Asset[]>(_shouldFetch ? _Assets_GET_GetAssets_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_Asset_TO_Asset_Array)] });
}
export async function createAsset(createAssetRequest: CreateAssetRequest): Promise<Asset> {
    const _response = await _createHttp().post(_Assets_POST_CreateAsset_url(), _convert_CreateAssetRequest_TO__api_CreateAssetRequest(createAssetRequest));
    return restoreCircularReferences(_convert__api_Asset_TO_Asset(_response.data), _createObject);
}
export async function getAsset(id: bigint): Promise<GetAssetResponse> {
    const _response = await _createHttp().get(_Assets_GET_GetAsset_url(id));
    return restoreCircularReferences(_convert__api_GetAssetResponse_TO_GetAssetResponse(_response.data), _createObject);
}
export function useSWRGetAsset(id: bigint, _config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<GetAssetResponse>(_shouldFetch ? _Assets_GET_GetAsset_url(id) : null, { ..._config, use: [_createSWRMiddleware(_convert__api_GetAssetResponse_TO_GetAssetResponse)] });
}

