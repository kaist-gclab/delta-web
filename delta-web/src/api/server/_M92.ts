/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import {
    EncryptionKeyView,
    CreateEncryptionKeyResponse,
    CreateEncryptionKeyRequest,
} from './_types';
import {
    _convert__api_EncryptionKeyView_TO_EncryptionKeyView_Array,
    _convert__api_CreateEncryptionKeyResponse_TO_CreateEncryptionKeyResponse,
    _convert_CreateEncryptionKeyRequest_TO__api_CreateEncryptionKeyRequest,
} from './_converters';
import {
    _EncryptionKeys_GET_GetEncryptionKeys_url,
    _EncryptionKeys_POST_Create_url,
} from './_url-builders';
export async function getEncryptionKeys(): Promise<EncryptionKeyView[]> {
    const _response = await _createHttp().get(_EncryptionKeys_GET_GetEncryptionKeys_url());
    return _restoreCircularReferences(_convert__api_EncryptionKeyView_TO_EncryptionKeyView_Array(_response.data), _createObject);
}
export async function create(createEncryptionKeyRequest: CreateEncryptionKeyRequest): Promise<CreateEncryptionKeyResponse> {
    const _response = await _createHttp().post(_EncryptionKeys_POST_Create_url(), _convert_CreateEncryptionKeyRequest_TO__api_CreateEncryptionKeyRequest(createEncryptionKeyRequest));
    return _restoreCircularReferences(_convert__api_CreateEncryptionKeyResponse_TO_CreateEncryptionKeyResponse(_response.data), _createObject);
}

