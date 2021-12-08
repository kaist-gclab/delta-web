import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ProcessorNodeContext } from '../config/context';
import { renderCellButton } from '../core/CellButton';
import { Loading } from '../core/Loading';
import { Column, Table, Cell, RowHeaderCell } from '@blueprintjs/table';

const ProcessorNodeListPage: React.FC = () => {
  const store = useContext(ProcessorNodeContext);
  const navigate = useNavigate();
  useEffect(() => { store.fetchAll(); }, [store]);

  const data = store.processorNodes;
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: number) => {
    navigate(`/processor-nodes/detail/${id}`);
  };

  return <div>
    <h1>처리기 노드 목록</h1>
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

export default observer(ProcessorNodeListPage);
