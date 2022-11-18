import { Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from '@emotion/styled';
import { JobTypeContext } from '../config/context';
import { Failed } from '../core/Failed';
import { Loading } from '../core/Loading';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';

const QueryButton = styled(Button)`
padding-left: 20px;
padding-right: 20px;
`;

const Message = styled.div`
margin: 20px 0;
`;

function JobTypeDetailPage() {
  const params = useParams<'id'>();
  const navigate = useNavigate();
  const [id, setId] = useState('');

  const store = useContext(JobTypeContext);
  useEffect(() => {
    if (params.id) {
      store.fetch(params.id);
    }
  }, [store, params]);

  const render = () => {
    const e = store.jobType;
    if (e === undefined) {
      return <Loading />;
    }
    if (e === null) {
      return <Failed />;
    }
    return <ul>
      <li>번호: {e.id.toString()}</li>
      <li>키: {e.key}</li>
      <li>이름: {e.name}</li>
    </ul>
  };

  const goDetailPage = () => navigate(`/job-types/detail/${id}`);

  return <Container>
    <PageHeader>작업 유형 상세 조회</PageHeader>
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

export default observer(JobTypeDetailPage);
