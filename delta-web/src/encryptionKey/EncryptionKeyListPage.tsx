import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Loading } from '../core/NonIdealStates';
import { EncryptionKeyContext } from '../config/context';
import { renderCellButton } from '../core/CellButton';
import { useNavigate } from 'react-router';
import { HTMLTable } from '@blueprintjs/core';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';

function EncryptionKeyListPage() {
  const store = useContext(EncryptionKeyContext);
  const navigate = useNavigate();
  useEffect(() => { store.fetchAll(); }, [store]);

  const data = store.encryptionKeys;
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: string) => {
    navigate(`/key/encryption-keys/detail/${id}`);
  };

  return <Container reducedTopPadding>
    <PageHeader>암호화 키 목록</PageHeader>
    <div>
      <HTMLTable>
        <thead>
          <tr>
            <th>이름</th>
            <th>활성 상태</th>
            <th>동작</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => <tr key={e.id.toString()}>
            <td>{e.name}</td>
            <td>{e.enabled ? '예' : '아니오'}</td>
            <td>{renderCellButton('상세 조회', () => goDetailPage(e.id.toString()))}</td>
          </tr>)}
        </tbody>
      </HTMLTable>
    </div>
  </Container>;
}

export default observer(EncryptionKeyListPage);
