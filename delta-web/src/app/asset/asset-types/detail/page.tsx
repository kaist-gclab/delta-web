'use client';

import { Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import { FormEvent, use, useState } from 'react';
import styled from '@emotion/styled';
import Container from '@/core/Container';
import PageHeader from '@/core/PageHeader';
import { ErrorMessage } from '@/core/NonIdealStates';
import { useRouter } from 'next/navigation';

const QueryButton = styled(Button)`
padding-left: 20px;
padding-right: 20px;
`;

const Message = styled.div`
margin: 20px 0;
`;

function AssetTypeDetailPage(props: { params: Promise<{ id?: string }> }) {
  const params = use(props.params);
  const router = useRouter();
  const [id, setId] = useState('');

  const render = () => {
    return <ErrorMessage message="애셋 유형 상세 조회 중 오류가 발생했습니다." />
  };

  const goDetailPage = () => router.push(`/asset/asset-types/detail/${id}`);

  return <Container reducedTopPadding>
    <PageHeader>애셋 유형 상세 조회</PageHeader>
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

export default AssetTypeDetailPage;
