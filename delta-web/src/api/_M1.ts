/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import { MonitoringServiceEvent } from './_types';
import { _convert__api_MonitoringServiceEvent_TO_MonitoringServiceEvent_Array } from './_converters';
import { _Monitoring_GET_GetStats_url } from './_url-builders';
export async function getStats(): Promise<MonitoringServiceEvent[]> {
    const _response = await _createHttp().get(_Monitoring_GET_GetStats_url());
    return _restoreCircularReferences(_convert__api_MonitoringServiceEvent_TO_MonitoringServiceEvent_Array(_response.data), _createObject);
}
export function useSWRGetStats(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<MonitoringServiceEvent[]>(_shouldFetch ? _Monitoring_GET_GetStats_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_MonitoringServiceEvent_TO_MonitoringServiceEvent_Array)] });
}

