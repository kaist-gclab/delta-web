/* eslint-disable */
// auto-generated
'use client';

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import {
    UploadTicket,
} from './_types';
import {
    _convert__api_UploadTicket_TO_UploadTicket,
} from './_converters';
import {
    _ObjectStorage_GET_GetUploadUrl_url,
} from './_url-builders';
export async function getUploadUrl(): Promise<UploadTicket> {
    const _response: any = await _createHttp().get(_ObjectStorage_GET_GetUploadUrl_url());
    return _restoreCircularReferences(_convert__api_UploadTicket_TO_UploadTicket(_response.data), _createObject);
}
export function useSWRGetUploadUrl(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<UploadTicket>(_shouldFetch ? _ObjectStorage_GET_GetUploadUrl_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_UploadTicket_TO_UploadTicket)] });
}

