'use client';

import { Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import { FormEvent, use, useState } from 'react';
import { ErrorMessage, Loading } from '@/core/NonIdealStates';
import Container from '@/core/Container';
import PageHeader from '@/core/PageHeader';
import { EncryptionKeys } from '@/api/client';
import { useRouter } from 'next/router';

function QueryButton(props: { onClick: () => void, children: React.ReactNode }) {
  return <Button onClick={props.onClick} style={{ paddingLeft: '20px', paddingRight: '20px' }}>
    {props.children}
  </Button>;
}

function Message(props: { children: React.ReactNode }) {
  return <div style={{ margin: '20px 0' }}>{props.children}</div>;
}

function EncryptionKeyDetailPage(props: { params: Promise<{ id?: string }> }) {
  const params = use(props.params);
  const router = useRouter();
  const [id, setId] = useState('');
  const { data, error } = EncryptionKeys.useSWRGetEncryptionKeys();
  if (error) {
    return <ErrorMessage message="암호화 키 상세 조회 중 오류가 발생했습니다." />;
  }
  if (!data) {
    return <Loading />;
  }

  const render = () => {
    const e = data.find((e) => e.id.toString() === params.id);
    if (!e) {
      return <ErrorMessage message="암호화 키 상세 조회 중 오류가 발생했습니다." />;
    }
    return <ul>
      <li>번호: {e.id.toString()}</li>
      <li>이름: {e.name}</li>
      <li>활성 상태: {e.enabled ? '예' : '아니오'}</li>
    </ul>
  };

  const goDetailPage = () => router.push(`/key/encryption-keys/detail/${id}`);

  return <Container reducedTopPadding>
    <PageHeader>암호화 키 상세 조회</PageHeader>
    <ControlGroup>
      <InputGroup type="text" leftIcon="numbered-list"
        placeholder="번호" value={id}
        onChange={(e: FormEvent<HTMLInputElement>) => {
          setId(e.currentTarget.value);
        }} />
      <QueryButton onClick={goDetailPage}>조회</QueryButton>
    </ControlGroup>
    {!params.id ? <Message>번호로 조회하십시오.</Message> : render()}
  </Container>;
}

export default EncryptionKeyDetailPage;
