/* eslint-disable */
// auto-generated
'use client';

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import _useSWR, { SWRConfiguration as _SWRConfiguration } from 'swr';
import { _createSWRMiddleware } from './_util';
import {
    EncryptionKeyView,
    CreateEncryptionKeyRequest,
} from './_types';
import {
    _convert__api_EncryptionKeyView_TO_EncryptionKeyView_Array,
    _convert__api_EncryptionKeyView_TO_EncryptionKeyView,
    _convert_CreateEncryptionKeyRequest_TO__api_CreateEncryptionKeyRequest,
} from './_converters';
import {
    _EncryptionKeys_GET_GetEncryptionKeys_url,
    _EncryptionKeys_GET_GetEncryptionKey_url,
    _EncryptionKeys_POST_Create_url,
    _EncryptionKeys_DELETE_Delete_url,
} from './_url-builders';
export async function getEncryptionKeys(): Promise<EncryptionKeyView[]> {
    const _response = await _createHttp().get(_EncryptionKeys_GET_GetEncryptionKeys_url());
    return _restoreCircularReferences(_convert__api_EncryptionKeyView_TO_EncryptionKeyView_Array(_response.data), _createObject);
}
export function useSWRGetEncryptionKeys(_config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<EncryptionKeyView[]>(_shouldFetch ? _EncryptionKeys_GET_GetEncryptionKeys_url() : null, { ..._config, use: [_createSWRMiddleware(_convert__api_EncryptionKeyView_TO_EncryptionKeyView_Array)] });
}
export async function getEncryptionKey(id: bigint): Promise<EncryptionKeyView> {
    const _response = await _createHttp().get(_EncryptionKeys_GET_GetEncryptionKey_url(id));
    return _restoreCircularReferences(_convert__api_EncryptionKeyView_TO_EncryptionKeyView(_response.data), _createObject);
}
export function useSWRGetEncryptionKey(id: bigint, _config: _SWRConfiguration = {}, _shouldFetch: boolean = true) {
    return _useSWR<EncryptionKeyView>(_shouldFetch ? _EncryptionKeys_GET_GetEncryptionKey_url(id) : null, { ..._config, use: [_createSWRMiddleware(_convert__api_EncryptionKeyView_TO_EncryptionKeyView)] });
}
export async function create(createEncryptionKeyRequest: CreateEncryptionKeyRequest): Promise<void> {
    await _createHttp().post(_EncryptionKeys_POST_Create_url(), _convert_CreateEncryptionKeyRequest_TO__api_CreateEncryptionKeyRequest(createEncryptionKeyRequest));
}
export async function /* delete */ Delete(id: bigint): Promise<void> {
    await _createHttp().delete(_EncryptionKeys_DELETE_Delete_url(id));
}

