/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import {
    ObjectStorageEventView,
    ProcessorNodeEventView,
    JobEventView,
} from './_types';
import {
    _convert__api_ObjectStorageEventView_TO_ObjectStorageEventView_Array,
    _convert__api_ProcessorNodeEventView_TO_ProcessorNodeEventView_Array,
    _convert__api_JobEventView_TO_JobEventView_Array,
} from './_converters';
import {
    _Monitoring_GET_GetObjectStorageEvents_url,
    _Monitoring_GET_GetProcessorNodeEvents_url,
    _Monitoring_GET_GetJobEvents_url,
} from './_url-builders';
export async function getObjectStorageEvents(): Promise<ObjectStorageEventView[]> {
    const _response = await _createHttp().get(_Monitoring_GET_GetObjectStorageEvents_url());
    return _restoreCircularReferences(_convert__api_ObjectStorageEventView_TO_ObjectStorageEventView_Array(_response.data), _createObject);
}
export async function getProcessorNodeEvents(): Promise<ProcessorNodeEventView[]> {
    const _response = await _createHttp().get(_Monitoring_GET_GetProcessorNodeEvents_url());
    return _restoreCircularReferences(_convert__api_ProcessorNodeEventView_TO_ProcessorNodeEventView_Array(_response.data), _createObject);
}
export async function getJobEvents(): Promise<JobEventView[]> {
    const _response = await _createHttp().get(_Monitoring_GET_GetJobEvents_url());
    return _restoreCircularReferences(_convert__api_JobEventView_TO_JobEventView_Array(_response.data), _createObject);
}

