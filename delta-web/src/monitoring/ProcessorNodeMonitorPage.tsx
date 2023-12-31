import { HTMLTable } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { JobContext } from '../config/context';
import Container from '../core/Container';
import { Loading } from '../core/NonIdealStates';
import PageHeader from '../core/PageHeader';

function ProcessorNodeMonitorPage() {
  const store = useContext(JobContext);
  useEffect(() => { store.fetchAll(); }, [store]);

  const data = store.jobs;
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
          {data.map((e) => <tr key={e.id.toString()}>
            <td>{e.createdAt.toISOString()}</td>
            <td>{e.jobArguments}</td>
          </tr>)}
        </tbody>
      </HTMLTable>
    </div>
  </Container>;
}

export default observer(ProcessorNodeMonitorPage);
