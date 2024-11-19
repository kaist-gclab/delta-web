'use client';

import { ErrorMessage, Loading } from '@/core/NonIdealStates';
import PageHeader from '@/core/PageHeader';
import { EncryptionKeys } from '@/api/client';
import { IdParamsProps, useBigIntId } from '@/core/identifier';
import { Button } from '@/core/Button';
import { useRouter } from 'next/navigation';
import { confirmDelete } from '@/core/inputConfirm';

export default function Page(props: IdParamsProps) {
  const id = useBigIntId(props);
  if (!id) {
    return <ErrorMessage message="식별자 형식이 잘못되었습니다." />;
  }
  return <Content id={id} />;
}

function Content({ id }: { id: bigint }) {
  const router = useRouter();
  const { data, error, mutate } = EncryptionKeys.useSWRGetEncryptionKey(id);
  if (error) {
    return <ErrorMessage message="암호화 키 조회 중 오류가 발생했습니다." />;
  }
  if (!data) {
    return <Loading />;
  }
  return <div className="container">
    <PageHeader>암호화 키 관리</PageHeader>
    <div>
      {data.assetCount}
      {data.bucketCount}
      {data.enabled}
      {data.name}
      {data.optimized}
    </div>
    <div className="mt-8 flex justify-end gap-8">
      <Button intent='danger' onClick={async () => {
        if (!confirmDelete()) {
          return;
        }
        try {
          await EncryptionKeys.Delete(id);
          router.push('/encryption-keys/list');
        } catch {
          alert('암호화 키 삭제 중 오류가 발생했습니다.');
        } finally {
          mutate();
        }
      }} disabled={data.assetCount > 0 || data.bucketCount > 0}>
        삭제
      </Button>
      <Button>
        저장
      </Button>
    </div>
  </div>;
}
