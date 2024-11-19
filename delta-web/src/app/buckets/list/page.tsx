'use client';

import { ErrorMessage, Loading } from '@/core/NonIdealStates';
import PageHeader from '@/core/PageHeader';
import { Buckets } from '@/api/client';
import { Table, TBody, Td, Th, THead, Tr } from '@/core/Table';
import { Button } from '@/core/Button';
import { FormButtonGroup } from '@/core/FormInput';
import { compareBuckets } from '../util';
import { localDateTime } from '@/core/datetime';

export default function Page() {
  const { data, error } = Buckets.useSWRGetBuckets();
  if (error) {
    return <ErrorMessage message="버킷 목록을 불러오는 중 오류가 발생했습니다." />
  }
  if (!data) {
    return <Loading />;
  }

  return <div className="container">
    <PageHeader>버킷 키 목록</PageHeader>
    {data.length === 0 && <ErrorMessage message="버킷이 없습니다." icon='empty' />}
    {data.length > 0 && <Table>
      <THead>
        <Th>#</Th>
        <Th>이름</Th>
        <Th className='w-[12rem]'>생성 일시</Th>
        <Th>그룹 이름</Th>
        <Th>암호화 키 이름</Th>
        <Th className='w-24'>태그 개수</Th>
      </THead>
      <TBody>
        {data.toSorted(compareBuckets).map((e) => <Tr key={e.id.toString()} href={`/buckets/list/${e.id}`}>
          <Td>{e.id}</Td>
          <Td>{e.name === null ? <span className='italic text-gray-400'>이름 없음</span> : e.name}</Td>
          <Td type='mono'>{localDateTime(e.createdAt)}</Td>
          <Td>{e.bucketGroupName === null ? <span className='italic text-gray-400'>미지정</span> : e.bucketGroupName}</Td>
          <Td>{e.encryptionKeyName === null ? <span className='italic text-gray-400'>미지정</span> : e.encryptionKeyName}</Td>
          <Td>{e.tagCount}</Td>
        </Tr>)}
      </TBody>
    </Table>}

    <FormButtonGroup>
      <Button href="/buckets/add">
        버킷 추가
      </Button>
    </FormButtonGroup>
  </div>;
}
