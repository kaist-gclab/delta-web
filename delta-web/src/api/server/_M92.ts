/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
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
} from './_url-builders';
export async function getEncryptionKeys(): Promise<EncryptionKeyView[]> {
    const _response = await _createHttp().get(_EncryptionKeys_GET_GetEncryptionKeys_url());
    return _restoreCircularReferences(_convert__api_EncryptionKeyView_TO_EncryptionKeyView_Array(_response.data), _createObject);
}
export async function getEncryptionKey(id: bigint): Promise<EncryptionKeyView> {
    const _response = await _createHttp().get(_EncryptionKeys_GET_GetEncryptionKey_url(id));
    return _restoreCircularReferences(_convert__api_EncryptionKeyView_TO_EncryptionKeyView(_response.data), _createObject);
}
export async function create(createEncryptionKeyRequest: CreateEncryptionKeyRequest): Promise<void> {
    await _createHttp().post(_EncryptionKeys_POST_Create_url(), _convert_CreateEncryptionKeyRequest_TO__api_CreateEncryptionKeyRequest(createEncryptionKeyRequest));
}

