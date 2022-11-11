/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import { Job, _api_Job, JobExecution, JobExecutionStatus, Object, JobScheduleResponse, _api_JobScheduleResponse, JobScheduleRequest, _api_JobScheduleRequest, CreateJobRequest, _api_CreateJobRequest, AddJobExecutionStatusRequest, _api_AddJobExecutionStatusRequest } from './_types';
import { _convert__api_Job_TO_Job_Array, _convert__api_Job_TO_Job, _convert__api_JobScheduleResponse_TO_JobScheduleResponse, _convert_JobScheduleRequest_TO__api_JobScheduleRequest, _convert_CreateJobRequest_TO__api_CreateJobRequest, _convert_AddJobExecutionStatusRequest_TO__api_AddJobExecutionStatusRequest } from './_converters';
import { _Jobs_GET_GetJobs_url, _Jobs_POST_Schedule_url, _Jobs_POST_CreateJob_url, _Jobs_POST_AddJobExecutionStatus_url } from './_url-builders';
export async function getJobs(): Promise<Job[]> {
    const _response = await _createHttp().get(_Jobs_GET_GetJobs_url());
    return restoreCircularReferences(_convert__api_Job_TO_Job_Array(_response.data), _createObject);
}
export function useSWRGetJobs(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<Job[]>(_shouldFetch ? _Jobs_GET_GetJobs_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_Job_TO_Job_Array)] });
}
export async function schedule(jobScheduleRequest: JobScheduleRequest): Promise<JobScheduleResponse> {
    const _response = await _createHttp().post(_Jobs_POST_Schedule_url(), _convert_JobScheduleRequest_TO__api_JobScheduleRequest(jobScheduleRequest));
    return restoreCircularReferences(_convert__api_JobScheduleResponse_TO_JobScheduleResponse(_response.data), _createObject);
}
export async function createJob(createJobRequest: CreateJobRequest): Promise<Job> {
    const _response = await _createHttp().post(_Jobs_POST_CreateJob_url(), _convert_CreateJobRequest_TO__api_CreateJobRequest(createJobRequest));
    return restoreCircularReferences(_convert__api_Job_TO_Job(_response.data), _createObject);
}
export async function addJobExecutionStatus(jobExecutionId: bigint, addJobExecutionStatusRequest: AddJobExecutionStatusRequest): Promise<void> {
    const _response = await _createHttp().post(_Jobs_POST_AddJobExecutionStatus_url(jobExecutionId), _convert_AddJobExecutionStatusRequest_TO__api_AddJobExecutionStatusRequest(addJobExecutionStatusRequest));
}

