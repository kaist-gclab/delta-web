import { Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from '@emotion/styled';
import { EncryptionKeyContext } from '../config/context';
import { ErrorMessage, Loading } from '../core/NonIdealStates';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';

const QueryButton = styled(Button)`
padding-left: 20px;
padding-right: 20px;
`;

const Message = styled.div`
margin: 20px 0;
`;

function EncryptionKeyDetailPage() {
  const params = useParams<'id'>();
  const navigate = useNavigate();
  const [id, setId] = useState('');

  const render = () => {
    const e = store.encryptionKey;
    if (e === undefined) {
      return <Loading />;
    }
    if (e === null) {
      return <ErrorMessage message="암호화 키 상세 조회 중 오류가 발생했습니다." />;
    }
    return <ul>
      <li>번호: {e.id.toString()}</li>
      <li>이름: {e.name}</li>
      <li>활성 상태: {e.enabled ? '예' : '아니오'}</li>
    </ul>
  };

  const goDetailPage = () => navigate(`/encryption-keys/detail/${id}`);

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

export default observer(EncryptionKeyDetailPage);
