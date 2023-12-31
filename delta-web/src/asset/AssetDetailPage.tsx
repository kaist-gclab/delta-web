import { Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from '@emotion/styled';
import { AssetContext } from '../config/context';
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

function AssetDetailPage() {
  const params = useParams<'id'>();
  const navigate = useNavigate();
  const [id, setId] = useState('');

  const store = useContext(AssetContext);
  useEffect(() => {
    if (params.id) {
      store.fetch(params.id);
    }
  }, [store, params]);

  const render = () => {
    const e = store.asset;
    if (e === undefined) {
      return <Loading />;
    }
    if (e === null) {
      return <Failed />;
    }
    return <ul>
      <li>번호: {e.id.toString()}</li>
    </ul>;
  };

  const goDetailPage = () => navigate(`/asset/assets/detail/${id}`);

  return <Container>
    <PageHeader>애셋 상세 조회</PageHeader>
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

export default observer(AssetDetailPage);
