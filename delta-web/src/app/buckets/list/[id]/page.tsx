'use client';

import { ErrorMessage, Loading } from '@/core/NonIdealStates';
import PageHeader from '@/core/PageHeader';
import { Buckets, BucketView, UpdateBucketRequest, UpdateBucketRequestBucketTag } from '@/api/client';
import { IdParamsProps, useBigIntId } from '@/core/identifier';
import { Button } from '@/core/Button';
import { useRouter } from 'next/navigation';
import { confirmDelete, confirmModify } from '@/core/inputConfirm';
import { FormButtonGroup, FormSWRConfig, Input, Label, LabelAndInput } from '@/core/FormInput';
import { useState } from 'react';
import { Table, TBody, Td, Th, THead, Tr } from '@/core/Table';
import { localDateTime } from '@/core/datetime';

export default function Page(props: IdParamsProps) {
  const id = useBigIntId(props);
  if (!id) {
    return <ErrorMessage message="식별자 형식이 잘못되었습니다." />;
  }
  return <div className="container">
    <PageHeader>버킷 관리</PageHeader>
    <Content id={id} />
  </div>;
}

function Content({ id }: { id: bigint }) {
  const { data, error, mutate } = Buckets.useSWRGetBucket(id, FormSWRConfig);
  if (error) {
    return <ErrorMessage message="버킷 조회 중 오류가 발생했습니다." />;
  }
  if (!data) {
    return <Loading />;
  }

  return <Form id={id} data={data} mutate={mutate} />;
}

function Form({ id, data, mutate }: { id: bigint, data: BucketView, mutate: () => void }) {
  const router = useRouter();
  const [tags, setTags] = useState<UpdateBucketRequestBucketTag[]>(
    data.tags.map(e => ({ key: e.key, value: e.value }))
  );

  const isValid = tags.every(e => e.key.length > 0);

  const submit = async () => {
    if (!isValid) {
      return;
    }
    if (!confirmModify()) {
      return;
    }
    try {
      const data: UpdateBucketRequest = { tags };
      await Buckets.update(id, data);
      router.push('/buckets/list');
    } catch {
      alert('버킷 수정 중 오류가 발생했습니다.');
    } finally {
      mutate();
    }
  };

  return <form onSubmit={(e) => {
    e.preventDefault();
    submit();
  }}>
    <LabelAndInput id='id' numeric type='text' label='식별자'
      inputProps={{ value: data.id.toString(), readOnly: true }} />

    <LabelAndInput id='createdAt' numeric type='text' label='생성 일시'
      inputProps={{ value: localDateTime(data.createdAt), readOnly: true }} />

    <LabelAndInput id='encryptionKeyName' numeric type='text' label='암호화 키 이름'
      inputProps={{ value: data.encryptionKeyName ?? '', readOnly: true }} />

    <LabelAndInput id='bucketGroupName' numeric type='text' label='버킷 그룹 이름'
      inputProps={{ value: data.bucketGroupName ?? '', readOnly: true }} />


    <Label>버킷 태그 관리</Label>
    <Table>
      <THead>
        <Th>키</Th>
        <Th>값</Th>
        <Th className='w-32'>작업</Th>
      </THead>
      <TBody>
        {tags.map((e, i) => <Tr key={i}>
          <Td>
            <Input type='text' value={e.key} onChange={(e) => {
              const newTags = [...tags];
              newTags[i].key = e.target.value;
              setTags(newTags);
            }} />
          </Td>
          <Td>
            <Input type='text' value={e.value} onChange={(e) => {
              const newTags = [...tags];
              newTags[i].value = e.target.value;
              setTags(newTags);
            }} />
          </Td>
          <Td>
            <Button small role='delete' onClick={() => {
              setTags(tags.filter((_, j) => j !== i));
            }}>
              버킷 태그 삭제
            </Button>
          </Td>
        </Tr>)}
      </TBody>
    </Table>
    {tags.length === 0 && <ErrorMessage icon="empty" message="버킷 태그가 없습니다." />}

    <FormButtonGroup>
      <Button small onClick={() => {
        setTags([...tags, { key: '', value: '' }]);
      }}>
        버킷 태그 추가
      </Button>
    </FormButtonGroup>

    <FormButtonGroup>
      <Button role='delete' onClick={async () => {
        if (!confirmDelete()) {
          return;
        }
        try {
          await Buckets.Delete(id);
          router.push('/buckets/list');
        } catch {
          alert('버킷 삭제 중 오류가 발생했습니다.');
        } finally {
          mutate();
        }
      }}>
        삭제
      </Button>
      <Button role='submit' disabled={!isValid}>
        저장
      </Button>
    </FormButtonGroup>
  </form>;
}
