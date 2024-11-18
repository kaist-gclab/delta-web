/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import { ProcessorNode, RegisterProcessorNodeRequest } from './_types';
import { _convert__api_ProcessorNode_TO_ProcessorNode_Array, _convert__api_ProcessorNode_TO_ProcessorNode, _convert_RegisterProcessorNodeRequest_TO__api_RegisterProcessorNodeRequest } from './_converters';
import { _ProcessorNodes_GET_GetNodes_url, _ProcessorNodes_POST_RegisterProcessorNode_url } from './_url-builders';
export async function getNodes(): Promise<ProcessorNode[]> {
    const _response = await _createHttp().get(_ProcessorNodes_GET_GetNodes_url());
    return _restoreCircularReferences(_convert__api_ProcessorNode_TO_ProcessorNode_Array(_response.data), _createObject);
}
export async function registerProcessorNode(registerProcessorNodeRequest: RegisterProcessorNodeRequest): Promise<ProcessorNode> {
    const _response = await _createHttp().post(_ProcessorNodes_POST_RegisterProcessorNode_url(), _convert_RegisterProcessorNodeRequest_TO__api_RegisterProcessorNodeRequest(registerProcessorNodeRequest));
    return _restoreCircularReferences(_convert__api_ProcessorNode_TO_ProcessorNode(_response.data), _createObject);
}

