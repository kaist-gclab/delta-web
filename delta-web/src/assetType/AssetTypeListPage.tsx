import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { AssetTypeContext } from '../config/context';
import { renderCellButton } from '../core/CellButton';
import { Loading } from '../core/Loading';
import { Column, Table, Cell, RowHeaderCell } from '@blueprintjs/table';

const AssetTypeListPage: React.FC = () => {
  const store = useContext(AssetTypeContext);
  const history = useHistory();
  useEffect(() => { store.fetchAll(); }, [store]);

  const data = store.assetTypes;
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: number) => {
    history.push(`/asset-types/detail/${id}`);
  };

  return <div>
    <h1>에셋 유형 목록</h1>
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

export default observer(AssetTypeListPage);
