'use client';

import Container from '@/core/Container';
import PageHeader from '@/core/PageHeader';
import Link from 'next/link';
import { ReactNode } from 'react';

function StartButton({ to, children }: { to: string, children: ReactNode }) {
  return <span style={{
    textAlign: 'center',
    display: 'inline-block',
    margin: '20px',
    width: '110px',
    height: '110px',
    paddingTop: '15px',
    border: '1px solid #bbb',
    borderRadius: '15px',
    cursor: 'pointer',
    color: 'black',
  }}>
    <Link href={to}>{children}</Link>
  </span>;
}

function StartLabel({ children }: { children: ReactNode }) {
  return <div style={{
    fontSize: '22px',
    marginTop: '10px',
  }}>{children}</div>;
}

const IconSize = 40;

function Icon({ children }: { children: ReactNode }) {
  return <span>{children}</span>;
}

function StartPage() {
  return <Container reducedTopPadding>
    <PageHeader>시작</PageHeader>
    <h2>도움말</h2>
    <StartButton to="/help">
      <Icon>📖</Icon>
      <StartLabel>도움말</StartLabel>
    </StartButton>
    <h2>자주 사용하는 기능</h2>
    <div>
      <StartButton to="/asset/assets/add">
        <Icon>📥</Icon>
        <StartLabel>애셋 추가</StartLabel>
      </StartButton>
      <StartButton to="/asset/assets/list">
        <Icon>🗂️</Icon>
        <StartLabel>애셋 목록</StartLabel>
      </StartButton>
      <StartButton to="/job/jobs/add">
        <Icon>🧑‍💻</Icon>
        <StartLabel>작업 추가</StartLabel>
      </StartButton>
      <StartButton to="/job/jobs/list">
        <Icon>⚙️</Icon>
        <StartLabel>작업 목록</StartLabel>
      </StartButton>
      <br />
      <StartButton to="/monitoring/dashboard">
        <Icon>📊</Icon>
        <StartLabel>대시보드</StartLabel>
      </StartButton>
    </div>
  </Container>
}

export default StartPage;
