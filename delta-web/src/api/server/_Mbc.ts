/* eslint-disable */
// auto-generated

import _dayjs, { Dayjs as _Dayjs } from 'dayjs';

import { _createHttp, _createObject, _restoreCircularReferences } from './_util';
import { JobTypeView } from './_types';
import { _convert__api_JobTypeView_TO_JobTypeView_Array } from './_converters';
import { _JobTypes_GET_GetJobTypes_url } from './_url-builders';
export async function getJobTypes(): Promise<JobTypeView[]> {
    const _response = await _createHttp().get(_JobTypes_GET_GetJobTypes_url());
    return _restoreCircularReferences(_convert__api_JobTypeView_TO_JobTypeView_Array(_response.data), _createObject);
}

