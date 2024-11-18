import { useNavigate } from 'react-router';
import { renderCellButton } from '../core/CellButton';
import { ErrorMessage, Loading } from '../core/NonIdealStates';
import { AssetTypes } from '../api/client';
import { HTMLTable } from '@blueprintjs/core';
import Container from '@/core/Container';
import PageHeader from '@/core/PageHeader';

function AssetTypeListPage() {
  const navigate = useNavigate();
  const { data, error } = AssetTypes.useSWRGetAssetTypes();
  if (error) {
    return <ErrorMessage message="애셋 유형 목록을 불러오는 중 오류가 발생했습니다." />
  }
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: string) => {
    navigate(`/asset/asset-types/detail/${id}`);
  };

  return <Container reducedTopPadding>
    <PageHeader>애셋 유형 목록</PageHeader>
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
          {data.map((assetType) => {
            return <tr key={assetType.id.toString()}>
              <td>{assetType.key}</td>
              <td>{assetType.name}</td>
              <td>{renderCellButton('상세 조회', () => goDetailPage(assetType.id.toString()))}</td>
            </tr>;
          })}
        </tbody>
      </HTMLTable>
    </div>
  </Container>;
}

export default AssetTypeListPage;
