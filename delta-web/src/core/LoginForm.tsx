'use client';

import { Button, InputGroup } from '@blueprintjs/core';
import { FormEvent, ReactNode, useContext, useState } from 'react';
import PageHeader from '@/core/PageHeader';
import { AuthContext } from './authContext';

function Container({ children }: { children: ReactNode }) {
  return <div style={{
    textAlign: 'center',
    marginTop: '30px',
  }}>
    {children}
  </div>;
}

function LoginButton({ children, onClick }: { children: ReactNode, onClick: () => void }) {
  return <Button onClick={onClick} style={{
    marginTop: '40px',
    paddingLeft: '20px',
    paddingRight: '20px',
  }}>
    {children}
  </Button>;
}

function Username({ type, value, onChange }: { type: string, value: string, onChange: (e: FormEvent<HTMLInputElement>) => void }) {
  return <InputGroup type={type} value={value} onChange={onChange} style={{
    width: '300px',
    margin: 'auto',
  }} />;
}

function Password({ type, value, onChange }: { type: string, value: string, onChange: (e: FormEvent<HTMLInputElement>) => void }) {
  return <InputGroup type={type} value={value} onChange={onChange} style={{
    width: '300px',
    margin: 'auto',
  }} />;
}

function Message({ children }: { children: ReactNode }) {
  return <div style={{
    fontSize: '16px',
  }}>
    {children}
  </div>;
}

function LoginForm() {
  const auth = useContext(AuthContext);
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
      const result = await auth.login(username, password);
      if (!result) {
        alert('로그인에 실패했습니다.');
      }
    }}>로그인</LoginButton>
  </Container>;
}

export default LoginForm;
