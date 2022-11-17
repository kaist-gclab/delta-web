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
      <Table2 numRows={data.length} selectionModes={[]}
        rowHeaderCellRenderer={(i) => <RowHeaderCell2 name={data[i].id.toString()} />}>
        <Column name="작업 유형 키" cellRenderer={(i) => <Cell>{data[i].jobType.key}</Cell>} />
        <Column name="작업 유형 이름" cellRenderer={(i) => <Cell>{data[i].jobType.name}</Cell>} />
        <Column name="작업 생성 시점" cellRenderer={(i) => <Cell>{data[i].createdAt.toISOString()}</Cell>} />
        <Column name="인수" cellRenderer={(i) => <Cell>{data[i].jobArguments}</Cell>} />
        <Column name="동작" cellRenderer={(i) => renderCellButton('상세 조회', () => goDetailPage(data[i].id.toString()))} />
      </Table2>
    </div>
  </div>;
};

export default observer(JobListPage);
