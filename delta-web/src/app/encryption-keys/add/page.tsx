'use client';
import PageHeader from '@/core/PageHeader';
import { Button } from '@/core/Button';
import { CreateEncryptionKeyRequest, EncryptionKeys } from '@/api/client';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { LabelAndInput } from '@/core/FormInput';

export default function Page() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<CreateEncryptionKeyRequest>();
  const submit = async (data: CreateEncryptionKeyRequest) => {
    try {
      await EncryptionKeys.create(data);
      router.push('/encryption-keys/list');
    } catch {
      alert('암호화 키 추가 중 오류가 발생했습니다.');
    }
  };

  return <div className="container">
    <PageHeader>암호화 키 추가</PageHeader>
    <form onSubmit={handleSubmit(submit)}>
      <LabelAndInput type='text' id="name" label="암호화 키 이름" placeholder="암호화 키 이름은 중복될 수 없습니다."
        inputProps={register('name', { required: true, setValueAs: (v) => v.trim() })} />

      <LabelAndInput type="checkbox" id="enabled" label="활성 여부"
        placeholder="선택하면 암호화 키가 생성된 후 바로 활성화됩니다."
        inputProps={register('enabled')} />

      <LabelAndInput type='checkbox' id="optimized" label="성능 최적화"
        placeholder="선택하면 암호화 키를 처리기 노드까지 전달하여 처리량을 최적화화며, 선택하지 않으면 암호화 키를 서버에만 유지하여 보안을 강화합니다."
        inputProps={register('optimized')} />

      <div className="mt-8 flex justify-end">
        <Button role="submit" disabled={!formState.isValid}>
          암호화 키 추가
        </Button>
      </div>
    </form>
  </div>;
}
