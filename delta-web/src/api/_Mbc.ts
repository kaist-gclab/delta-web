/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import { JobType, Job, _api_JobType, _api_Job, Object } from './_types';
import { _convert__api_JobType_TO_JobType, _convert__api_JobType_TO_JobType_Array } from './_converters';
import { _JobTypes_GET_GetJobTypes_url } from './_url-builders';
export async function getJobTypes(): Promise<JobType[]> {
    const _response = await _createHttp().get(_JobTypes_GET_GetJobTypes_url());
    return restoreCircularReferences(_convert__api_JobType_TO_JobType_Array(_response.data), _createObject);
}
export function useSWRGetJobTypes(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<JobType[]>(_shouldFetch ? _JobTypes_GET_GetJobTypes_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_JobType_TO_JobType_Array)] });
}

