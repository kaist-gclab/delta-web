'use client';

import { ErrorMessage, Loading } from '@/core/NonIdealStates';
import PageHeader from '@/core/PageHeader';
import { Monitoring } from '@/api/client';

function JobMonitorPage() {
  const { error, data } = Monitoring.useSWRGetJobEvents();
  if (error) {
    return <ErrorMessage message="작업 모니터링 정보를 불러오는 중 오류가 발생했습니다." />;
  }
  if (!data) {
    return <Loading />;
  }

  return <div className="container">
    <PageHeader>작업 모니터</PageHeader>
    <div>
      <table>
        <thead>
          <tr>
            <th>타임스탬프</th>
            <th>인자</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job) => {
            return <tr key={job.id.toString()}>
              <td>{job.timestamp.toISOString()}</td>
              <td>{job.jobArguments}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  </div>;
}

export default JobMonitorPage;
