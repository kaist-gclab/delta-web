import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { JobTypeContext } from '../config/context';
import { renderCellButton } from '../core/CellButton';
import { Loading } from '../core/Loading';
import { Column, Table, Cell, RowHeaderCell } from '@blueprintjs/table';

const JobTypeListPage: React.FC = () => {
  const store = useContext(JobTypeContext);
  const navigate = useNavigate();
  useEffect(() => { store.fetchAll(); }, [store]);

  const data = store.jobTypes;
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: number) => {
    history.push(`/job-types/detail/${id}`);
  };

  return <div>
    <h1>작업 유형 목록</h1>
    <div>
      <Table numRows={data.length} selectionModes={[]}
        rowHeaderCellRenderer={(i) => <RowHeaderCell name={data[i].id.toString()} />}>
        <Column name="키" cellRenderer={(i) => <Cell>{data[i].key}</Cell>} />
        <Column name="이름" cellRenderer={(i) => <Cell>{data[i].name}</Cell>} />
        <Column name="동작" cellRenderer={(i) => renderCellButton('상세 조회', () => goDetailPage(data[i].id))} />
      </Table>
    </div>
  </div>;
};

export default observer(JobTypeListPage);
