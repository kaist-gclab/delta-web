'use client';

import { renderCellButton } from '@/core/CellButton';
import { ErrorMessage, Loading } from '@/core/NonIdealStates';
import { Assets } from '@/api/client';
import Container from '@/core/Container';
import PageHeader from '@/core/PageHeader';
import { useRouter } from 'next/navigation';

function AssetListPage() {
  const router = useRouter();
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
      <table>
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
            <td>{a.storeKey}</td>
            <td>{renderCellButton('상세 조회', () => {
              router.push(`/asset/assets/detail/${a.id.toString()}`);
            })}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  </Container>;
}

export default AssetListPage;
