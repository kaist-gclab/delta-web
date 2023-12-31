import { Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { ErrorMessage, Loading } from '../core/NonIdealStates';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';
import { Assets } from '../api';

const QueryButton = styled(Button)`
padding-left: 20px;
padding-right: 20px;
`;

const Message = styled.div`
margin: 20px 0;
`;

function AssetViewerPage() {
  const params = useParams<'id'>();
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const { error, data } = Assets.useSWRGetAssets();
  if (error) {
    return <ErrorMessage message="애셋을 불러오는 중 오류가 발생했습니다." />;
  }
  if (!data) {
    return <Loading />;
  }

  const render = () => {
    const e = store.asset;
    if (e === undefined) {
      return <Loading />;
    }
    if (e === null) {
      return <ErrorMessage message="애셋을 불러오는 중 오류가 발생했습니다." />
    }
    return <ul>
      <li>번호: {e.id.toString()}</li>
    </ul>
  };

  const goDetailPage = () => navigate(`/assets/detail/${id}`);

  return <Container reducedTopPadding>
    <PageHeader>애셋 뷰어</PageHeader>
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

export default observer(AssetViewerPage);
