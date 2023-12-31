import { HTMLTable } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { JobTypeContext } from '../config/context';
import { renderCellButton } from '../core/CellButton';
import Container from '../core/Container';
import { Loading } from '../core/NonIdealStates';
import PageHeader from '../core/PageHeader';

function JobTypeListPage() {
  const navigate = useNavigate();

  const data = store.jobTypes;
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: string) => {
    navigate(`/job/job-types/detail/${id}`);
  };

  return <Container reducedTopPadding>
    <PageHeader>작업 유형 목록</PageHeader>
    <div>
      <HTMLTable>
        <thead>
          <tr>
            <th>키</th>
            <th>이름</th>
            <th>동작</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => <tr key={e.id.toString()}>
            <td>{e.key}</td>
            <td>{e.name}</td>
            <td>{renderCellButton('상세 조회', () => goDetailPage(e.id.toString()))}</td>
          </tr>)}
        </tbody>
      </HTMLTable>
    </div>
  </Container>;
}

export default observer(JobTypeListPage);
