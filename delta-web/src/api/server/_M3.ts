/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import { ApiHomeResponse } from './_types';
import { _convert_string_TO_string, _convert__api_ApiHomeResponse_TO_ApiHomeResponse } from './_converters';
import { _Home_GET_Home_url, _Home_GET_ApiHome_url } from './_url-builders';
export async function home(): Promise<string> {
    const _response = await _createHttp().get(_Home_GET_Home_url());
    return _restoreCircularReferences(_convert_string_TO_string(_response.data), _createObject);
}
export async function apiHome(): Promise<ApiHomeResponse> {
    const _response = await _createHttp().get(_Home_GET_ApiHome_url());
    return _restoreCircularReferences(_convert__api_ApiHomeResponse_TO_ApiHomeResponse(_response.data), _createObject);
}

