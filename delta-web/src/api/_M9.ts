/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import { EncryptionKey, CreateEncryptionKeyResponse, CreateEncryptionKeyRequest } from './_types';
import { _convert__api_EncryptionKey_TO_EncryptionKey_Array, _convert__api_CreateEncryptionKeyResponse_TO_CreateEncryptionKeyResponse, _convert_CreateEncryptionKeyRequest_TO__api_CreateEncryptionKeyRequest } from './_converters';
import { _EncryptionKeys_GET_GetEncryptionKeys_url, _EncryptionKeys_POST_Create_url } from './_url-builders';
export async function getEncryptionKeys(): Promise<EncryptionKey[]> {
    const _response = await _createHttp().get(_EncryptionKeys_GET_GetEncryptionKeys_url());
    return _restoreCircularReferences(_convert__api_EncryptionKey_TO_EncryptionKey_Array(_response.data), _createObject);
}
export function useSWRGetEncryptionKeys(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<EncryptionKey[]>(_shouldFetch ? _EncryptionKeys_GET_GetEncryptionKeys_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_EncryptionKey_TO_EncryptionKey_Array)] });
}
export async function create(createEncryptionKeyRequest: CreateEncryptionKeyRequest): Promise<CreateEncryptionKeyResponse> {
    const _response = await _createHttp().post(_EncryptionKeys_POST_Create_url(), _convert_CreateEncryptionKeyRequest_TO__api_CreateEncryptionKeyRequest(createEncryptionKeyRequest));
    return _restoreCircularReferences(_convert__api_CreateEncryptionKeyResponse_TO_CreateEncryptionKeyResponse(_response.data), _createObject);
}

