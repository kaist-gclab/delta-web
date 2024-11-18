import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { renderCellButton } from '../core/CellButton';
import { ErrorMessage, Loading } from '../core/NonIdealStates';
import { Asset, Assets } from '../api/client';
import { HTMLTable } from '@blueprintjs/core';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';

const Label = styled.label`
margin-right: 5px;
`;

const FormRow = styled.div`
margin-bottom: 10px;
`;

function getTag(a: Asset, key: string) {
  const tag = a.assetTags.find(t => t.key === key);
  if (tag) {
    return tag.value;
  }
  return '없음';
}

function AssetListPage() {
  const navigate = useNavigate();
  const { data, error } = Assets.useSWRGetAssets();
  if (error) {
    return <ErrorMessage message="애셋 목록을 불러오는 중 오류가 발생했습니다." />
  }
  if (!data) {
    return <Loading />;
  }

  return <Container reducedTopPadding>
    <PageHeader>애셋 목록</PageHeader>
    <div>
      <HTMLTable>
        <thead>
          <tr>
            <th>애셋 #</th>
            <th>애셋 유형 키</th>
            <th>애셋 유형 이름</th>
            <th>미디어 형식</th>
            <th>암호화 키 이름</th>
            <th>오브젝트 저장소 키</th>
            <th>동작</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a, i) => <tr key={i.toString()}>
            <td>{a.id.toString()}</td>
            <td>{a.assetType.key}</td>
            <td>{a.assetType.name}</td>
            <td>{a.mediaType}</td>
            <td>{a.encryptionKey?.name ?? '없음'}</td>
            <td>{a.storeKey}</td>
            <td>{renderCellButton('상세 조회', () => {
              navigate(`/asset/assets/detail/${a.id.toString()}`);
            })}</td>
          </tr>)}
        </tbody>
      </HTMLTable>
    </div>
  </Container>;
}

export default AssetListPage;
