'use client';

import { ErrorMessage, Loading } from '@/core/NonIdealStates';
import PageHeader from '@/core/PageHeader';
import { Monitoring } from '@/api/client';
import dayjs from 'dayjs';

function ObjectStorageMonitorPage() {
  const { error, data } = Monitoring.useSWRGetObjectStorageEvents();

  if (error) {
    return <ErrorMessage message="오브젝트 저장소 모니터링 정보를 불러오는 중 오류가 발생했습니다." />;
  }
  if (!data) {
    return <Loading />;
  }

  return <div className="container">
    <PageHeader>오브젝트 저장소 모니터</PageHeader>
    <div>
      <table>
        <thead>
          <tr>
            <th>타임스탬프</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => <tr key={e.time.toString()}>
            <td>{dayjs(e.time).toISOString()}</td>
            <td>{e.content}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  </div>;
}

export default ObjectStorageMonitorPage;
