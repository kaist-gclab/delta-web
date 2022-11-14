import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Loading } from '../core/Loading';
import { EncryptionKeyContext } from '../config/context';
import { Column, Table2, Cell, RowHeaderCell2 } from '@blueprintjs/table';
import { renderCellButton } from '../core/CellButton';
import { useNavigate } from 'react-router';

const EncryptionKeyListPage: React.FC = () => {
  const store = useContext(EncryptionKeyContext);
  const navigate = useNavigate();
  useEffect(() => { store.fetchAll(); }, [store]);

  const data = store.encryptionKeys;
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: string) => {
    navigate(`/encryption-keys/detail/${id}`);
  };

  return <div>
    <h1>암호화 키 목록</h1>
    <div>
      <Table2 numRows={data.length} selectionModes={[]}
        rowHeaderCellRenderer={(i) => <RowHeaderCell2 name={data[i].id.toString()} />}>
        <Column name="이름" cellRenderer={(i) => <Cell>{data[i].name}</Cell>} />
        <Column name="활성 상태" cellRenderer={(i) => <Cell>{data[i].enabled ? '예' : '아니오'}</Cell>} />
        <Column name="동작" cellRenderer={(i) => renderCellButton('상세 조회', () => goDetailPage(data[i].id.toString()))} />
      </Table2>
    </div>
  </div>;
};

export default observer(EncryptionKeyListPage);
