/* eslint-disable */
// auto-generated
'use client';

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
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
export function useSWRGetObjectStorageEvents(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<ObjectStorageEventView[]>(_shouldFetch ? _Monitoring_GET_GetObjectStorageEvents_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_ObjectStorageEventView_TO_ObjectStorageEventView_Array)] });
}
export async function getProcessorNodeEvents(): Promise<ProcessorNodeEventView[]> {
    const _response = await _createHttp().get(_Monitoring_GET_GetProcessorNodeEvents_url());
    return _restoreCircularReferences(_convert__api_ProcessorNodeEventView_TO_ProcessorNodeEventView_Array(_response.data), _createObject);
}
export function useSWRGetProcessorNodeEvents(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<ProcessorNodeEventView[]>(_shouldFetch ? _Monitoring_GET_GetProcessorNodeEvents_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_ProcessorNodeEventView_TO_ProcessorNodeEventView_Array)] });
}
export async function getJobEvents(): Promise<JobEventView[]> {
    const _response = await _createHttp().get(_Monitoring_GET_GetJobEvents_url());
    return _restoreCircularReferences(_convert__api_JobEventView_TO_JobEventView_Array(_response.data), _createObject);
}
export function useSWRGetJobEvents(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<JobEventView[]>(_shouldFetch ? _Monitoring_GET_GetJobEvents_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_JobEventView_TO_JobEventView_Array)] });
}

