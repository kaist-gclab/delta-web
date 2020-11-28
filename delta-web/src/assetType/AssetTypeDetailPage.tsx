import { Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import { observer } from 'mobx-react';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import { AssetTypeContext } from '../config/context';
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

const AssetTypeDetailPage: React.FC = () => {
  const params = useParams<Params>();
  const history = useHistory();
  const [id, setId] = useState('');

  const store = useContext(AssetTypeContext);
  useEffect(() => {
    if (params.id) {
      store.fetch(Number(params.id));
    }
  }, [store, params]);

  const render = () => {
    const e = store.assetType;
    if (e === undefined) {
      return <Loading />;
    }
    if (e === null) {
      return <Failed />;
    }
    return <ul>
      <li>번호: {e.id}</li>
    </ul>
  };

  const goDetailPage = () => history.push(`/asset-types/detail/${id}`);

  return <div>
    <h1>에셋 유형 상세 조회</h1>
    <ControlGroup>
      <InputGroup type="text" leftIcon="numbered-list"
        placeholder="번호" value={id}
        onChange={(e: FormEvent<HTMLInputElement>) => {
          setId(e.currentTarget.value);
        }} />
      <QueryButton onClick={goDetailPage}>조회</QueryButton>
    </ControlGroup>
    {!params.id ? <Message>번호로 조회하십시오.</Message> : render()}
  </div>;
};

export default observer(AssetTypeDetailPage);
