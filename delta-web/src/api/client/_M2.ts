/* eslint-disable */
// auto-generated
'use client';

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import {
    JobView,
    JobScheduleResponse,
    JobScheduleRequest,
    CreateJobRequest,
    AddJobExecutionStatusRequest,
} from './_types';
import {
    _convert__api_JobView_TO_JobView_Array,
    _convert__api_JobScheduleResponse_TO_JobScheduleResponse,
    _convert_JobScheduleRequest_TO__api_JobScheduleRequest,
    _convert_CreateJobRequest_TO__api_CreateJobRequest,
    _convert_AddJobExecutionStatusRequest_TO__api_AddJobExecutionStatusRequest,
} from './_converters';
import {
    _Jobs_GET_GetJobs_url,
    _Jobs_POST_Schedule_url,
    _Jobs_POST_CreateJob_url,
    _Jobs_POST_AddJobExecutionStatus_url,
} from './_url-builders';
export async function getJobs(): Promise<JobView[]> {
    const _response = await _createHttp().get(_Jobs_GET_GetJobs_url());
    return _restoreCircularReferences(_convert__api_JobView_TO_JobView_Array(_response.data), _createObject);
}
export function useSWRGetJobs(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<JobView[]>(_shouldFetch ? _Jobs_GET_GetJobs_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_JobView_TO_JobView_Array)] });
}
export async function schedule(jobScheduleRequest: JobScheduleRequest): Promise<JobScheduleResponse> {
    const _response = await _createHttp().post(_Jobs_POST_Schedule_url(), _convert_JobScheduleRequest_TO__api_JobScheduleRequest(jobScheduleRequest));
    return _restoreCircularReferences(_convert__api_JobScheduleResponse_TO_JobScheduleResponse(_response.data), _createObject);
}
export async function createJob(createJobRequest: CreateJobRequest): Promise<void> {
    await _createHttp().post(_Jobs_POST_CreateJob_url(), _convert_CreateJobRequest_TO__api_CreateJobRequest(createJobRequest));
}
export async function addJobExecutionStatus(jobExecutionId: bigint, addJobExecutionStatusRequest: AddJobExecutionStatusRequest): Promise<void> {
    await _createHttp().post(_Jobs_POST_AddJobExecutionStatus_url(jobExecutionId), _convert_AddJobExecutionStatusRequest_TO__api_AddJobExecutionStatusRequest(addJobExecutionStatusRequest));
}

