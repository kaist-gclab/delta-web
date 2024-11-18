/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import { UploadTicket } from './_types';
import { _convert__api_UploadTicket_TO_UploadTicket } from './_converters';
import { _ObjectStorage_GET_GetUploadUrl_url } from './_url-builders';
export async function getUploadUrl(): Promise<UploadTicket> {
    const _response = await _createHttp().get(_ObjectStorage_GET_GetUploadUrl_url());
    return _restoreCircularReferences(_convert__api_UploadTicket_TO_UploadTicket(_response.data), _createObject);
}

