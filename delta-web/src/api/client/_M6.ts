/* eslint-disable */
// auto-generated
'use client';

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import {
    ChangePasswordRequest,
} from './_types';
import {
    _convert_ChangePasswordRequest_TO__api_ChangePasswordRequest,
} from './_converters';
import {
    _Users_POST_ChangePassword_url,
} from './_url-builders';
export async function changePassword(request: ChangePasswordRequest): Promise<void> {
    await _createHttp().post(_Users_POST_ChangePassword_url(), _convert_ChangePasswordRequest_TO__api_ChangePasswordRequest(request));
}

