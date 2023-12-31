import { HTMLTable } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ProcessorNodeContext } from '../config/context';
import { renderCellButton } from '../core/CellButton';
import Container from '../core/Container';
import { Loading } from '../core/NonIdealStates';
import PageHeader from '../core/PageHeader';

function ProcessorNodeListPage() {
  const store = useContext(ProcessorNodeContext);
  const navigate = useNavigate();
  useEffect(() => { store.fetchAll(); }, [store]);

  const data = store.processorNodes;
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: string) => {
    navigate(`/processor-nodes/detail/${id}`);
  };

  return <Container>
    <PageHeader>처리기 노드 목록</PageHeader>
    <div>
      <HTMLTable>
        <thead>
          <tr>
            <th>키</th>
            <th>이름</th>
            <th>동작</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => <tr key={e.id.toString()}>
            <td>{e.key}</td>
            <td>{e.name}</td>
            <td>{renderCellButton('상세 조회', () => goDetailPage(e.id.toString()))}</td>
          </tr>)}
        </tbody>
      </HTMLTable>
    </div>
  </Container>;
}

export default observer(ProcessorNodeListPage);
