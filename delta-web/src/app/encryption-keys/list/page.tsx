'use client';

import { ErrorMessage, Loading } from '@/core/NonIdealStates';
import PageHeader from '@/core/PageHeader';
import { EncryptionKeys } from '@/api/client';
import { Table, TBody, Td, Th, THead, Tr } from '@/core/Table';
import { Button } from '@/core/Button';

export default function Page() {
  const { data, error } = EncryptionKeys.useSWRGetEncryptionKeys();
  if (error) {
    return <ErrorMessage message="암호화 키 목록을 불러오는 중 오류가 발생했습니다." />
  }
  if (!data) {
    return <Loading />;
  }

  return <div className="container">
    <PageHeader>암호화 키 목록</PageHeader>
    <Table>
      <THead>
        <Th>이름</Th>
        <Th className='w-24'>활성</Th>
        <Th className='w-24'>최적화</Th>
      </THead>
      <TBody>
        {data.map((e) => <Tr key={e.id.toString()} href={`/encryption-keys/list/${e.id}`}>
          <Td>{e.name}</Td>
          <Td>{e.enabled ? '예' : '아니오'}</Td>
          <Td>{e.optimized ? '성능' : '보안'}</Td>
        </Tr>)}
      </TBody>
    </Table>
    <div className="mt-8 flex justify-end">
      <Button href="/encryption-keys/add">
        암호화 키 추가
      </Button>
    </div>
  </div >;
}
