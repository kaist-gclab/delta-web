import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { JobContext } from '../config/context';
import { Loading } from '../core/Loading';

function ObjectStorageMonitorPage() {
  const store = useContext(JobContext);
  useEffect(() => { store.fetchAll(); }, [store]);

  const data = store.jobs;
  if (!data) {
    return <Loading />;
  }

  return <div>
    <h1>오브젝트 저장소 모니터</h1>
    <div>
      <Table2 numRows={data.length} selectionModes={[]}
        rowHeaderCellRenderer={(i) => <RowHeaderCell2 name={data[i].id.toString()} />}>
        <Column name="타임스탬프" cellRenderer={(i) => <Cell>{data[i].jobType.key}</Cell>} />
        <Column name="내용" cellRenderer={(i) => <Cell>{data[i].jobType.name}</Cell>} />
      </Table2>
    </div>
  </div>;
}

export default observer(ObjectStorageMonitorPage);
