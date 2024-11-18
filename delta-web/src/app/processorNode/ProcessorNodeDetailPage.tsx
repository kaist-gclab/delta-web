import { Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from '@emotion/styled';
import { ErrorMessage, Loading } from '../core/NonIdealStates';
import Container from '@/core/Container';
import PageHeader from '../core/PageHeader';
import { ProcessorNodes } from '../api/client';

const QueryButton = styled(Button)`
padding-left: 20px;
padding-right: 20px;
`;

const Message = styled.div`
margin: 20px 0;
`;

function ProcessorNodeDetailPage() {
  const params = useParams<'id'>();
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const { error, data } = ProcessorNodes.useSWRGetNodes();
  if (error) {
    return <ErrorMessage message="처리기 노드 상세 조회 중 오류가 발생했습니다." />;
  }
  if (!data) {
    return <Loading />;
  }

  const render = () => {
    const e = data.find((e) => e.id.toString() === params.id);
    if (!e) {
      return <ErrorMessage message="처리기 노드 상세 조회 중 오류가 발생했습니다." />;
    }
    return <ul>
      <li>번호: {e.id.toString()}</li>
    </ul>
  };

  const goDetailPage = () => navigate(`/node/processor-nodes/detail/${id}`);

  return <Container reducedTopPadding>
    <PageHeader>처리기 노드 상세 조회</PageHeader>
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

export default ProcessorNodeDetailPage;
