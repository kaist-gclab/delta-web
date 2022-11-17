import { HTMLTable } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { JobContext } from '../config/context';
import { renderCellButton } from '../core/CellButton';
import { Loading } from '../core/Loading';

const JobListPage: React.FC = () => {
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
    <h1>작업 목록</h1>
    <div>
      <HTMLTable>
        <thead>
          <tr>
            <th>작업 유형 키</th>
            <th>작업 유형 이름</th>
            <th>작업 생성 시점</th>
            <th>인수</th>
            <th>동작</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job) => {
            return <tr key={job.id.toString()}>
              <td>{job.jobType.key}</td>
              <td>{job.jobType.name}</td>
              <td>{job.createdAt.toISOString()}</td>
              <td>{job.jobArguments}</td>
              <td>{renderCellButton('상세 조회', () => goDetailPage(job.id.toString()))}</td>
            </tr>;
          })}
        </tbody>
      </HTMLTable>
    </div>
  </div>;
};

export default observer(JobListPage);
