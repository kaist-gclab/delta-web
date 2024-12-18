'use client';

import { renderCellButton } from '@/core/CellButton';
import { ErrorMessage, Loading } from '@/core/NonIdealStates';
import PageHeader from '@/core/PageHeader';
import { JobTypes } from '@/api/client';
import { useRouter } from 'next/navigation';

function JobTypeListPage() {
  const router = useRouter();
  const { error, data } = JobTypes.useSWRGetJobTypes();
  if (error) {
    return <ErrorMessage message="작업 유형 목록 조회 중 오류가 발생했습니다." />;
  }
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: string) => {
    router.push(`/job/job-types/detail/${id}`);
  };

  return <div className="container">
    <PageHeader>작업 유형 목록</PageHeader>
    <div>
      <table>
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
      </table>
    </div>
  </div>;
}

export default JobTypeListPage;
