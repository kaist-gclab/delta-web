'use client';

import PageHeader from '@/core/PageHeader';
import { Button } from '@/core/Button';
import { Buckets, CreateBucketRequest } from '@/api/client';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { FormButtonGroup, LabelAndInput } from '@/core/FormInput';

export default function Page() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<CreateBucketRequest>();
  const submit = async (data: CreateBucketRequest) => {
    try {
      await Buckets.create(data);
      router.push('/buckets/list');
    } catch {
      alert('버킷 추가 중 오류가 발생했습니다.');
    }
  };

  return <div className="container">
    <PageHeader>버킷 추가</PageHeader>
    <form onSubmit={handleSubmit(submit)}>
      <LabelAndInput type='text' id="name" label="버킷 이름" placeholder="버킷 이름은 생략할 수 있습니다."
        inputProps={register('name', { setValueAs: (v) => v.trim() })} />

      <LabelAndInput type="text" id="encryption-key-name" label="암호화 키 이름"
        placeholder="버킷 암호화 키는 한 번 정하면 변경할 수 없으며, 버킷을 복사하여 암호화 키를 변경하거나 해제할 수 있습니다."
        inputProps={register('encryptionKeyName', { setValueAs: (v) => v.trim() })} />

      <FormButtonGroup>
        <Button role="submit" disabled={!formState.isValid}>
          버킷 추가
        </Button>
      </FormButtonGroup>
    </form>
  </div>;
}
