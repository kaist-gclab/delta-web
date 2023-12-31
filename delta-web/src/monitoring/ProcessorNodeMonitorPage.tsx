import { HTMLTable } from '@blueprintjs/core';
import Container from '../core/Container';
import { ErrorMessage, Loading } from '../core/NonIdealStates';
import PageHeader from '../core/PageHeader';
import { Monitoring } from '../api';
import dayjs from 'dayjs';

function ProcessorNodeMonitorPage() {
  const { error, data } = Monitoring.useSWRGetProcessorNodeEvents();
  if (error) {
    return <ErrorMessage message="처리기 노드 모니터링 정보를 불러오는 중 오류가 발생했습니다." />;
  }
  if (!data) {
    return <Loading />;
  }

  return <Container reducedTopPadding>
    <PageHeader>처리기 노드 모니터</PageHeader>
    <div>
      <HTMLTable>
        <thead>
          <tr>
            <th>타임스탬프</th>
            <th>인자</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => <tr key={e.time.toString()}>
            <td>{dayjs(e.time).toISOString()}</td>
            <td>{e.content}</td>
          </tr>)}
        </tbody>
      </HTMLTable>
    </div>
  </Container>;
}

export default ProcessorNodeMonitorPage
