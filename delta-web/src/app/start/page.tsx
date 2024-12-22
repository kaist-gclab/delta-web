import Link from 'next/link';
import { ReactNode } from 'react';

function StartButton({ to, children }: { to: string, children: ReactNode }) {
  return <span className="inline-block m-4 w-32 h-32 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200">
    <Link href={to} className='hover:text-black hover:no-underline flex flex-col items-center justify-center h-full'>
      {children}
    </Link>
  </span>;
}

function StartLabel({ children }: { children: ReactNode }) {
  return <div className="text-xl font-bold">
    {children}
  </div>;
}

function Icon({ children }: { children: ReactNode }) {
  return <span className="text-4xl mb-2">
    {children}
  </span>;
}

function StartPage() {
  return <div className="container text-center">
    <div className='inline-block text-left'>
      <StartButton to="/help">
        <Icon>📖</Icon>
        <StartLabel>도움말</StartLabel>
      </StartButton>
      <br className='hidden md:block' />
      <StartButton to="/buckets">
        <Icon>🪣</Icon>
        <StartLabel>버킷</StartLabel>
      </StartButton>
      <StartButton to="/jobs">
        <Icon>🗂️</Icon>
        <StartLabel>작업</StartLabel>
      </StartButton>
      <StartButton to="/processor-nodes">
        <Icon>⚙️</Icon>
        <StartLabel>처리기 노드</StartLabel>
      </StartButton>
      <StartButton to="/encryption-keys">
        <Icon>🔐</Icon>
        <StartLabel>암호화 키</StartLabel>
      </StartButton>
      <br className='hidden md:block' />
      <StartButton to="/job-types">
        <Icon>📝</Icon>
        <StartLabel>작업 유형</StartLabel>
      </StartButton>
      <StartButton to="/monitoring">
        <Icon>📊</Icon>
        <StartLabel>모니터링</StartLabel>
      </StartButton>
      <StartButton to="/settings">
        <Icon>🔧</Icon>
        <StartLabel>설정</StartLabel>
      </StartButton>
    </div>
  </div>;
}

export default StartPage;
