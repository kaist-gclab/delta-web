'use client';

import { ErrorMessage, Loading } from '@/core/NonIdealStates';
import PageHeader from '@/core/PageHeader';
import { EncryptionKeys, EncryptionKeyView, UpdateEncryptionKeyRequest } from '@/api/client';
import { IdParamsProps, useBigIntId } from '@/core/identifier';
import { Button } from '@/core/Button';
import { useRouter } from 'next/navigation';
import { confirmDelete, confirmModify } from '@/core/inputConfirm';
import { FormButtonGroup, FormSWRConfig, LabelAndInput } from '@/core/FormInput';
import { useForm } from 'react-hook-form';

export default function Page(props: IdParamsProps) {
  const id = useBigIntId(props);
  if (!id) {
    return <ErrorMessage message="식별자 형식이 잘못되었습니다." />;
  }
  return <div className="container">
    <PageHeader>암호화 키 관리</PageHeader>
    <Content id={id} />
  </div>;
}

function Content({ id }: { id: bigint }) {
  const { data, error, mutate } = EncryptionKeys.useSWRGetEncryptionKey(id, FormSWRConfig);
  if (error) {
    return <ErrorMessage message="암호화 키 조회 중 오류가 발생했습니다." />;
  }
  if (!data) {
    return <Loading />;
  }

  return <Form id={id} data={data} mutate={mutate} />;
}

function Form({ id, data, mutate }: { id: bigint, data: EncryptionKeyView, mutate: () => void }) {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<UpdateEncryptionKeyRequest>(
    { defaultValues: { name: data.name, enabled: data.enabled, optimized: data.optimized } }
  );
  const submit = async (data: UpdateEncryptionKeyRequest) => {
    if (!confirmModify()) {
      return;
    }
    try {
      await EncryptionKeys.update(id, data);
      router.push('/encryption-keys/list');
    } catch {
      alert('암호화 키 수정 중 오류가 발생했습니다.');
    } finally {
      mutate();
    }
  };

  return <form onSubmit={handleSubmit(submit)}>
    <LabelAndInput type='text' id="name" label="암호화 키 이름" placeholder="암호화 키 이름은 중복될 수 없습니다."
      inputProps={register('name', { required: true, setValueAs: (v) => v.trim() })} />

    <LabelAndInput type="checkbox" id="enabled" label="활성 여부"
      inputProps={register('enabled')} />

    <LabelAndInput type='checkbox' id="optimized" label="성능 최적화"
      placeholder="선택하면 암호화 키를 처리기 노드까지 전달하여 처리량을 최적화화며, 선택하지 않으면 암호화 키를 서버에만 유지하여 보안을 강화합니다."
      inputProps={register('optimized')} />

    <FormButtonGroup>
      <Button role='delete' onClick={async () => {
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
      <Button role='submit' disabled={!formState.isValid}>
        저장
      </Button>
    </FormButtonGroup>
  </form>;
}
