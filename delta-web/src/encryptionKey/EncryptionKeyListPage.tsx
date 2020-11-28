import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Loading } from '../core/Loading';
import { EncryptionKeyContext } from '../config/context';
import { Column, Table, Cell, RowHeaderCell } from '@blueprintjs/table';

const EncryptionKeyListPage: React.FC = () => {
  const enc = useContext(EncryptionKeyContext);
  useEffect(() => { enc.fetchEncryptionKeys(); }, [enc]);

  const data = enc.encryptionKeys;
  if (!data) {
    return <Loading />;
  }

  return <div>
    <h1>암호화 키 목록</h1>
    <div>
      <Table numRows={data.length} selectionModes={[]}
        rowHeaderCellRenderer={(i) => <RowHeaderCell name={data[i].id.toString()} />}>
        <Column name="이름" cellRenderer={(i) => <Cell>{data[i].name}</Cell>} />
        <Column name="활성 상태" cellRenderer={(i) => <Cell>{data[i].enabled ? '예' : '아니오'}</Cell>} />
      </Table>
    </div>
  </div>;
};

export default observer(EncryptionKeyListPage);
