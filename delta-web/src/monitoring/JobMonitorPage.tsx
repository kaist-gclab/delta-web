import { HTMLTable } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { JobContext } from '../config/context';
import { Loading } from '../core/Loading';

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

  return <div>
    <h1>작업 모니터</h1>
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
          })};
        </tbody>
      </HTMLTable>
    </div>
  </div>;
}

export default observer(JobMonitorPage);
