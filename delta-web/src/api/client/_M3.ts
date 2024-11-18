/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import { ApiHomeResponse } from './_types';
import { _convert_string_TO_string, _convert__api_ApiHomeResponse_TO_ApiHomeResponse } from './_converters';
import { _Home_GET_Home_url, _Home_GET_ApiHome_url } from './_url-builders';
export async function home(): Promise<string> {
    const _response = await _createHttp().get(_Home_GET_Home_url());
    return _restoreCircularReferences(_convert_string_TO_string(_response.data), _createObject);
}
export function useSWRHome(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<string>(_shouldFetch ? _Home_GET_Home_url() : null, { ..._config, use: [_createSWRMiddleware(_convert_string_TO_string)] });
}
export async function apiHome(): Promise<ApiHomeResponse> {
    const _response = await _createHttp().get(_Home_GET_ApiHome_url());
    return _restoreCircularReferences(_convert__api_ApiHomeResponse_TO_ApiHomeResponse(_response.data), _createObject);
}
export function useSWRApiHome(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<ApiHomeResponse>(_shouldFetch ? _Home_GET_ApiHome_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_ApiHomeResponse_TO_ApiHomeResponse)] });
}

