/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import {
    SetSettingRequest,
} from './_types';
import {
    _convert_SetSettingRequest_TO__api_SetSettingRequest,
} from './_converters';
import {
    _Settings_PUT_SetSetting_url,
} from './_url-builders';
export async function setSetting(request: SetSettingRequest): Promise<void> {
    await _createHttp().put(_Settings_PUT_SetSetting_url(), _convert_SetSettingRequest_TO__api_SetSettingRequest(request));
}

