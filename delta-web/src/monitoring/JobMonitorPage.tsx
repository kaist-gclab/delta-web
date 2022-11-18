import { HTMLTable } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { JobContext } from '../config/context';
import Container from '../core/Container';
import { Loading } from '../core/Loading';
import PageHeader from '../core/PageHeader';

function JobMonitorPage() {
  const store = useContext(JobContext);
  const navigate = useNavigate();
  useEffect(() => { store.fetchAll(); }, [store]);

  const data = store.jobs;
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: string) => {
    navigate(`/jobs/detail/${id}`);
  };

  return <Container>
    <PageHeader>작업 모니터</PageHeader>
    <div>
      <HTMLTable>
        <thead>
          <tr>
            <th>타임스탬프</th>
            <th>인자</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job) => {
            return <tr key={job.id.toString()}>
              <td>{job.createdAt.toISOString()}</td>
              <td>{job.jobArguments}</td>
            </tr>;
          })}
        </tbody>
      </HTMLTable>
    </div>
  </Container>;
}

export default observer(JobMonitorPage);
