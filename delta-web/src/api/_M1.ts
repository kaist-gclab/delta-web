/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import { Object, _api_Object } from './_types';
import { _convert__api_Object_TO_Object_Array, _convert__api_Object_TO_Object } from './_converters';
import { _Monitoring_GET_GetStats_url } from './_url-builders';
export async function getStats(): Promise<Object[]> {
    const _response = await _createHttp().get(_Monitoring_GET_GetStats_url());
    return restoreCircularReferences(_convert__api_Object_TO_Object_Array(_response.data), _createObject);
}
export function useSWRGetStats(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<Object[]>(_shouldFetch ? _Monitoring_GET_GetStats_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_Object_TO_Object_Array)] });
}

