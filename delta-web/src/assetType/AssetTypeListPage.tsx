import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AssetTypeContext } from '../config/context';
import { renderCellButton } from '../core/CellButton';
import { Loading } from '../core/Loading';
import { Column, Table2, Cell, RowHeaderCell } from '@blueprintjs/table';

const AssetTypeListPage: React.FC = () => {
  const store = useContext(AssetTypeContext);
  const navigate = useNavigate();
  useEffect(() => { store.fetchAll(); }, [store]);

  const data = store.assetTypes;
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: string) => {
    navigate(`/asset-types/detail/${id}`);
  };

  return <div>
    <h1>에셋 유형 목록</h1>
    <div>
      <Table2 numRows={data.length} selectionModes={[]}
        rowHeaderCellRenderer={(i) => <RowHeaderCell name={data[i].id.toString()} />}>
        <Column name="키" cellRenderer={(i) => <Cell>{data[i].key}</Cell>} />
        <Column name="이름" cellRenderer={(i) => <Cell>{data[i].name}</Cell>} />
        <Column name="동작" cellRenderer={(i) => renderCellButton('상세 조회', () => goDetailPage(data[i].id))} />
      </Table2>
    </div>
  </div>;
};

export default observer(AssetTypeListPage);
