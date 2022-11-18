/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import { LoginResponse, _api_LoginResponse, LoginRequest, _api_LoginRequest } from './_types';
import { _convert__api_LoginResponse_TO_LoginResponse, _convert_LoginRequest_TO__api_LoginRequest } from './_converters';
import { _Auth_POST_Login_url } from './_url-builders';
export async function login(loginRequest: LoginRequest): Promise<LoginResponse> {
    const _response = await _createHttp().post(_Auth_POST_Login_url(), _convert_LoginRequest_TO__api_LoginRequest(loginRequest));
    return restoreCircularReferences(_convert__api_LoginResponse_TO_LoginResponse(_response.data), _createObject);
}

