/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import {
    Job,
    JobScheduleResponse,
    JobScheduleRequest,
    CreateJobRequest,
    AddJobExecutionStatusRequest,
} from './_types';
import {
    _convert__api_Job_TO_Job,
    _convert__api_Job_TO_Job_Array,
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
export async function getJobs(): Promise<Job[]> {
    const _response = await _createHttp().get(_Jobs_GET_GetJobs_url());
    return _restoreCircularReferences(_convert__api_Job_TO_Job_Array(_response.data), _createObject);
}
export async function schedule(jobScheduleRequest: JobScheduleRequest): Promise<JobScheduleResponse> {
    const _response = await _createHttp().post(_Jobs_POST_Schedule_url(), _convert_JobScheduleRequest_TO__api_JobScheduleRequest(jobScheduleRequest));
    return _restoreCircularReferences(_convert__api_JobScheduleResponse_TO_JobScheduleResponse(_response.data), _createObject);
}
export async function createJob(createJobRequest: CreateJobRequest): Promise<Job> {
    const _response = await _createHttp().post(_Jobs_POST_CreateJob_url(), _convert_CreateJobRequest_TO__api_CreateJobRequest(createJobRequest));
    return _restoreCircularReferences(_convert__api_Job_TO_Job(_response.data), _createObject);
}
export async function addJobExecutionStatus(jobExecutionId: bigint, addJobExecutionStatusRequest: AddJobExecutionStatusRequest): Promise<void> {
    await _createHttp().post(_Jobs_POST_AddJobExecutionStatus_url(jobExecutionId), _convert_AddJobExecutionStatusRequest_TO__api_AddJobExecutionStatusRequest(addJobExecutionStatusRequest));
}

