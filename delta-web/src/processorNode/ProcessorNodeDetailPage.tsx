import { Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from '@emotion/styled';
import { ProcessorNodeContext } from '../config/context';
import { Failed } from '../core/Failed';
import { Loading } from '../core/NonIdealStates';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';

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

  const store = useContext(ProcessorNodeContext);
  useEffect(() => {
    if (params.id) {
      store.fetch(params.id);
    }
  }, [store, params]);

  const render = () => {
    const e = store.processorNode;
    if (e === undefined) {
      return <Loading />;
    }
    if (e === null) {
      return <Failed />;
    }
    return <ul>
      <li>번호: {e.id.toString()}</li>
    </ul>
  };

  const goDetailPage = () => navigate(`/processor-nodes/detail/${id}`);

  return <Container>
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

export default observer(ProcessorNodeDetailPage);
