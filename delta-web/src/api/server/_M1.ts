/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import { ObjectStorageEvent, ProcessorNodeEvent, JobEvent } from './_types';
import { _convert__api_ObjectStorageEvent_TO_ObjectStorageEvent_Array, _convert__api_ProcessorNodeEvent_TO_ProcessorNodeEvent_Array, _convert__api_JobEvent_TO_JobEvent_Array } from './_converters';
import { _Monitoring_GET_GetObjectStorageEvents_url, _Monitoring_GET_GetProcessorNodeEvents_url, _Monitoring_GET_GetJobEvents_url } from './_url-builders';
export async function getObjectStorageEvents(): Promise<ObjectStorageEvent[]> {
    const _response = await _createHttp().get(_Monitoring_GET_GetObjectStorageEvents_url());
    return _restoreCircularReferences(_convert__api_ObjectStorageEvent_TO_ObjectStorageEvent_Array(_response.data), _createObject);
}
export async function getProcessorNodeEvents(): Promise<ProcessorNodeEvent[]> {
    const _response = await _createHttp().get(_Monitoring_GET_GetProcessorNodeEvents_url());
    return _restoreCircularReferences(_convert__api_ProcessorNodeEvent_TO_ProcessorNodeEvent_Array(_response.data), _createObject);
}
export async function getJobEvents(): Promise<JobEvent[]> {
    const _response = await _createHttp().get(_Monitoring_GET_GetJobEvents_url());
    return _restoreCircularReferences(_convert__api_JobEvent_TO_JobEvent_Array(_response.data), _createObject);
}

