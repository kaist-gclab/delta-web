import { Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import { observer } from 'mobx-react';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import { EncryptionKeyContext } from '../config/context';
import { Failed } from '../core/Failed';
import { Loading } from '../core/Loading';

interface Params {
  id?: string;
}

const QueryButton = styled(Button)`
padding-left: 20px;
padding-right: 20px;
`;

const Message = styled.div`
margin: 20px 0;
`;

const EncryptionKeyDetailPage: React.FC = () => {
  const params = useParams<Params>();
  const history = useHistory();
  const [id, setId] = useState('');

  const enc = useContext(EncryptionKeyContext);
  useEffect(() => {
    if (params.id) {
      enc.fetch(Number(params.id));
    }
  }, [enc, params]);

  const render = () => {
    const e = enc.encryptionKey;
    if (e === undefined) {
      return <Loading />;
    }
    if (e === null) {
      return <Failed />;
    }
    return <ul>
      <li>번호: {e.id}</li>
      <li>이름: {e.name}</li>
      <li>활성 상태: {e.enabled ? '예' : '아니오'}</li>
    </ul>
  };

  const goDetailPage = () => history.push(`/encryption-keys/detail/${id}`);

  return <div>
    <h1>암호화 키 상세 조회</h1>
    <ControlGroup>
      <InputGroup type="text" leftIcon="numbered-list"
        placeholder="번호" value={id}
        onChange={(e: FormEvent<HTMLInputElement>) => {
          setId(e.currentTarget.value);
        }} />
      <QueryButton onClick={goDetailPage}>조회</QueryButton>
    </ControlGroup>
    {!params.id ? <Message>번호로 조회하십시오.</Message> : render()}
  </div >;
};

export default observer(EncryptionKeyDetailPage);
