import { Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from '@emotion/styled';
import { Failed } from '../core/Failed';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';

const QueryButton = styled(Button)`
padding-left: 20px;
padding-right: 20px;
`;

const Message = styled.div`
margin: 20px 0;
`;

function AssetTypeDetailPage() {
  const params = useParams<'id'>();
  const navigate = useNavigate();
  const [id, setId] = useState('');

  const render = () => {
    return <Failed />;
  };

  const goDetailPage = () => navigate(`/asset/asset-types/detail/${id}`);

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
