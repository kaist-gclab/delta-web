'use client';

import { ReactNode, Suspense, useContext, useMemo } from 'react';
import NavButton from './NavButton';
import LoginForm from './LoginForm';
import { Loading } from './NonIdealStates';
import { usePathname } from 'next/navigation';
import { AuthContext } from './authContext';

type NavEntry = {
  text: string;
} & (
    { link: string } |
    { onClick: () => void }
  );

function Layout({ children }: { children: ReactNode }) {
  const auth = useContext(AuthContext);
  const pathname = usePathname();

  const RootBeginNavEntries: NavEntry[] = [
    { link: '/start', text: '홈' },
    { link: '/buckets', text: '버킷' },
    { link: '/jobs', text: '작업' },
    { link: '/job-types', text: '작업 유형' },
    { link: '/processor-nodes', text: '처리기 노드' },
    { link: '/encryption-keys', text: '암호화 키' },
    { link: '/monitoring', text: '모니터링' },
  ];

  const RootEndNavEntries: NavEntry[] = [
    { link: '/help', text: '도움말' },
    { link: '/settings', text: '설정' },
    { onClick: () => { auth.logout(); }, text: '로그아웃' },
  ];

  const SubNavEntries: {
    path: string;
    name: string;
    entries: NavEntry[];
  }[] = [
      {
        path: '/buckets',
        name: '버킷',
        entries: [
          { link: '/buckets/list', text: '버킷 목록' },
          { link: '/buckets/add', text: '버킷 추가' },
        ],
      },
      {
        path: '/jobs',
        name: '작업',
        entries: [
          { link: '/jobs/list', text: '작업 목록' },
          { link: '/jobs/add', text: '작업 추가' },
        ],
      },
      {
        path: '/job-types',
        name: '작업 유형',
        entries: [
          { link: '/job-types/list', text: '작업 유형 목록' },
          { link: '/job-types/add', text: '작업 유형 추가' },
        ],
      },
      {
        path: '/processor-nodes',
        name: '처리기 노드',
        entries: [
          { link: '/processor-nodes/list', text: '목록' },
          { link: '/processor-nodes/detail', text: '상세 조회' },
        ],
      },
      {
        path: '/encryption-keys',
        name: '암호화 키',
        entries: [
          { link: '/encryption-keys/list', text: '암호화 키 목록' },
          { link: '/encryption-keys/add', text: '암호화 키 추가' },
        ],
      },
      {
        path: '/monitoring',
        name: '모니터링',
        entries: [
          { link: '/monitoring/dashboard', text: '대시보드' },
          { link: '/monitoring/object-storage', text: '오브젝트 저장소 모니터' },
          { link: '/monitoring/processor-node', text: '처리기 노드 모니터' },
          { link: '/monitoring/jobs', text: '작업 모니터' },
        ],
      },
      {
        path: '/settings',
        name: '설정',
        entries: [
          { link: '/settings/user', text: '사용자 설정' },
          { link: '/settings/system', text: '시스템 설정' },
          { link: '/settings/viewers/list', text: '뷰어 목록' },
        ],
      }
    ];

  const subNavEnabled = useMemo(() => {
    return SubNavEntries.some(({ path }) => pathname.startsWith(path));
  }, [pathname]);

  if (!auth.token) {
    return <Suspense fallback={<Loading />}>
      <LoginForm />
    </Suspense>;
  }

  return <>
    <div className="text-sm leading-tight md:fixed md:top-0 md:w-full z-50  bg-[rgb(40,82,150)] shadow-md">
      <div className="flex flex-row p-[6px] flex-wrap">
        <div className="flex flex-row flex-wrap">
          {RootBeginNavEntries.map((entry, i) => <NavButton key={i} {...entry} />)}
        </div>
        <div className='flex flex-row flex-wrap ml-auto'>
          {RootEndNavEntries.map((entry, i) => <NavButton key={i} {...entry} />)}
        </div>
      </div>
      <div>
        {SubNavEntries.flatMap(({ path, entries, name }) => {
          if (!pathname.startsWith(path)) return [];
          return [
            <div key={path} className="flex flex-row flex-wrap bg-[rgb(84,121,175)] border-t border-gray-400">
              <div className="text-gray-200 select-none pr-3 pl-3 font-bold bg-[rgb(40,82,150)] md:flex items-center hidden ">
                <div>
                  {name}
                </div>
              </div>
              <div className='p-2'>
                {entries.map((entry, i) => <NavButton key={i} {...entry} />)}
              </div>
            </div>
          ];
        })}
      </div>
    </div>
    <div className={'pt-2 ' + (subNavEnabled ? 'md:mt-[87px]' : 'md:mt-[41px]')}>
      {children}
    </div>
  </>;
}

export default Layout;
