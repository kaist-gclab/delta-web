'use client';

import { renderCellButton } from '@/core/CellButton';
import Container from '@/core/Container';
import { ErrorMessage, Loading } from '@/core/NonIdealStates';
import PageHeader from '@/core/PageHeader';
import { Jobs } from '@/api/client';
import { useRouter } from 'next/navigation';

function JobListPage() {
  const router = useRouter();
  const { error, data } = Jobs.useSWRGetJobs();
  if (error) {
    return <ErrorMessage message="작업 목록 조회 중 오류가 발생했습니다." />;
  }
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: string) => {
    router.push(`/job/jobs/detail/${id}`);
  };

  if (data.length === 0) {
    return <Container reducedTopPadding>
      <PageHeader>작업 목록</PageHeader>
      <div>작업이 없습니다.</div>
    </Container>;
  }

  return <Container reducedTopPadding>
    <PageHeader>작업 목록</PageHeader>
    <div>
      <table>
        <thead>
          <tr>
            <th>작업 유형 키</th>
            <th>작업 유형 이름</th>
            <th>작업 생성 시점</th>
            <th>인수</th>
            <th>동작</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job) => {
            return <tr key={job.id.toString()}>
              <td>{job.jobType.key}</td>
              <td>{job.jobType.name}</td>
              <td>{job.createdAt.toISOString()}</td>
              <td>{job.jobArguments}</td>
              <td>{renderCellButton('상세 조회', () => goDetailPage(job.id.toString()))}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  </Container>;
}

export default JobListPage;
