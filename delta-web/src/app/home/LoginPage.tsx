import { Button, InputGroup } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { FormEvent, useContext, useState } from 'react';
import styled from '@emotion/styled';
import { AuthContext } from '../config/context';
import PageHeader from '../core/PageHeader';

const Container = styled.div`
text-align: center;
margin-top: 30px;
`;

const LoginButton = styled(Button)`
margin-top: 40px;
padding-left: 20px;
padding-right: 20px;
`;

const Username = styled(InputGroup)`
width: 300px;
margin: auto;
`;

const Password = styled(InputGroup)`
width: 300px;
margin: auto;
`;

const Message = styled.div`
font-size: 16px;
`;

function LoginPage() {
  const authStore = useContext(AuthContext);
  const [username, setUsername] = useState('DefaultAdminUser');
  const [password, setPassword] = useState('');

  return <Container>
    <PageHeader>3차원 기하 모델 프로세싱 프레임워크 v5.0</PageHeader>
    <Message>
      로그인이 필요합니다.
    </Message>
    <h2>사용자 이름</h2>
    <Username type="text" value={username}
      onChange={(e: FormEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value);
      }} />
    <h2>암호</h2>
    <Password type="password" value={password}
      onChange={(e: FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
      }} />
    <LoginButton onClick={async () => {
      const result: boolean = await authStore.login(username, password) as any as boolean;
      if (!result) {
        alert('로그인에 실패했습니다.');
      }
    }}>로그인</LoginButton>
  </Container>;
}

export default observer(LoginPage);
