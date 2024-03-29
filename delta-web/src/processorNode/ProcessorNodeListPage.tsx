import { HTMLTable } from '@blueprintjs/core';
import { useNavigate } from 'react-router';
import { renderCellButton } from '../core/CellButton';
import Container from '../core/Container';
import { ErrorMessage, Loading } from '../core/NonIdealStates';
import PageHeader from '../core/PageHeader';
import { ProcessorNodes } from '../api';

function ProcessorNodeListPage() {
  const navigate = useNavigate();
  const { error, data } = ProcessorNodes.useSWRGetNodes();
  if (error) {
    return <ErrorMessage message="처리기 노드 목록 조회 중 오류가 발생했습니다." />;
  }
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: string) => {
    navigate(`/node/processor-nodes/detail/${id}`);
  };

  return <Container reducedTopPadding>
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

export default ProcessorNodeListPage;
