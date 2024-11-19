'use client';

import { ErrorMessage, Loading } from '@/core/NonIdealStates';
import PageHeader from '@/core/PageHeader';
import { EncryptionKeys } from '@/api/client';
import { Table, TBody, Td, Th, THead, Tr } from '@/core/Table';
import { Button } from '@/core/Button';
import { FormButtonGroup } from '@/core/FormInput';

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
    {data.length === 0 && <ErrorMessage message="암호화 키가 없습니다." icon='empty' />}
    {data.length > 0 && <Table>
      <THead>
        <Th>이름</Th>
        <Th className='w-24'>활성</Th>
        <Th className='w-24'>최적화</Th>
        <Th className='w-24'>버킷 수</Th>
        <Th className='w-24'>애셋 수</Th>
      </THead>
      <TBody>
        {data.map((e) => <Tr key={e.id.toString()} href={`/encryption-keys/list/${e.id}`}>
          <Td>{e.name}</Td>
          <Td>{e.enabled ? '예' : '아니오'}</Td>
          <Td>{e.optimized ? '성능' : '보안'}</Td>
          <Td numeric>{e.bucketCount.toString()}</Td>
          <Td numeric>{e.assetCount.toString()}</Td>
        </Tr>)}
      </TBody>
    </Table>}

    <FormButtonGroup>
      <Button href="/encryption-keys/add">
        암호화 키 추가
      </Button>
    </FormButtonGroup>
  </div>;
}
