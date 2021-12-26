import { Table2, RowHeaderCell, Column, Cell } from '@blueprintjs/table';
import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { JobContext } from '../config/context';
import { Loading } from '../core/Loading';

const ObjectStorageMonitorPage: React.FC = () => {
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
    <h1>오브젝트 저장소 모니터</h1>
    <div>
      <Table2 numRows={data.length} selectionModes={[]}
        rowHeaderCellRenderer={(i) => <RowHeaderCell name={data[i].id.toString()} />}>
        <Column name="타임스탬프" cellRenderer={(i) => <Cell>{data[i].jobType.key}</Cell>} />
        <Column name="내용" cellRenderer={(i) => <Cell>{data[i].jobType.name}</Cell>} />
      </Table2>
    </div>
  </div>;
};

export default observer(ObjectStorageMonitorPage);
