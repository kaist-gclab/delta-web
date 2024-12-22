/* eslint-disable */
// auto-generated
'use client';

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import {
    JobTypeView,
    CreateJobTypeRequest,
} from './_types';
import {
    _convert__api_JobTypeView_TO_JobTypeView_Array,
    _convert__api_JobTypeView_TO_JobTypeView,
    _convert_CreateJobTypeRequest_TO__api_CreateJobTypeRequest,
} from './_converters';
import {
    _JobTypes_GET_GetJobTypes_url,
    _JobTypes_POST_CreateJobType_url,
    _JobTypes_GET_GetJobType_url,
} from './_url-builders';
export async function getJobTypes(): Promise<JobTypeView[]> {
    const _response = await _createHttp().get(_JobTypes_GET_GetJobTypes_url());
    return _restoreCircularReferences(_convert__api_JobTypeView_TO_JobTypeView_Array(_response.data), _createObject);
}
export function useSWRGetJobTypes(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<JobTypeView[]>(_shouldFetch ? _JobTypes_GET_GetJobTypes_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_JobTypeView_TO_JobTypeView_Array)] });
}
export async function createJobType(request: CreateJobTypeRequest): Promise<void> {
    await _createHttp().post(_JobTypes_POST_CreateJobType_url(), _convert_CreateJobTypeRequest_TO__api_CreateJobTypeRequest(request));
}
export async function getJobType(id: bigint): Promise<JobTypeView> {
    const _response = await _createHttp().get(_JobTypes_GET_GetJobType_url(id));
    return _restoreCircularReferences(_convert__api_JobTypeView_TO_JobTypeView(_response.data), _createObject);
}
export function useSWRGetJobType(id: bigint, _config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<JobTypeView>(_shouldFetch ? _JobTypes_GET_GetJobType_url(id) : null, { ..._config, use: [_createSWRMiddleware(_convert__api_JobTypeView_TO_JobTypeView)] });
}

