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

  if (!auth.token) {
    return <Suspense fallback={<Loading />}>
      <LoginForm />
    </Suspense>;
  }

  const RootBeginNavEntries: NavEntry[] = [
    { link: '/start', text: '홈' },
    { link: '/asset', text: '애셋' },
    { link: '/job', text: '작업' },
    { link: '/node', text: '처리기 노드' },
    { link: '/key', text: '암호화 키' },
    { link: '/monitoring', text: '모니터링' },
  ];

  const RootEndNavEntries: NavEntry[] = [
    { link: '/help', text: '도움말' },
    { link: '/settings', text: '설정' },
    { onClick: () => { auth.logout(); }, text: '로그아웃' },
  ];

  const SubNavEntries: {
    path: string;
    entries: NavEntry[];
  }[] = [
      {
        path: '/asset',
        entries: [
          { link: '/asset/assets/add', text: '애셋 추가' },
          { link: '/asset/assets/list', text: '애셋 목록' },
          { link: '/asset/assets/detail', text: '애셋 상세 조회' },
          { link: '/asset/assets/viewer', text: '애셋 뷰어' },
          { link: '/asset/asset-types/add', text: '애셋 유형 추가' },
          { link: '/asset/asset-types/list', text: '애셋 유형 목록' },
          { link: '/asset/asset-types/detail', text: '애셋 유형 상세 조회' },
        ],
      },
      {
        path: '/job',
        entries: [
          { link: '/job/jobs/add', text: '작업 추가' },
          { link: '/job/jobs/list', text: '작업 목록' },
          { link: '/job/jobs/detail', text: '작업 상세 조회' },
          { link: '/job/job-types/list', text: '작업 유형 목록' },
          { link: '/job/job-types/detail', text: '작업 유형 상세 조회' },
        ],
      },
      {
        path: '/node',
        entries: [
          { link: '/node/processor-nodes/list', text: '목록' },
          { link: '/node/processor-nodes/detail', text: '상세 조회' },
        ],
      },
      {
        path: '/key',
        entries: [
          { link: '/key/encryption-keys/add', text: '추가' },
          { link: '/key/encryption-keys/list', text: '목록' },
          { link: '/key/encryption-keys/detail', text: '상세 조회' },
        ],
      },
      {
        path: '/monitoring',
        entries: [
          { link: '/monitoring/dashboard', text: '대시보드' },
          { link: '/monitoring/object-storage', text: '오브젝트 저장소 모니터' },
          { link: '/monitoring/processor-node', text: '처리기 노드 모니터' },
          { link: '/monitoring/jobs', text: '작업 모니터' },
        ],
      },
      {
        path: '/settings',
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

  return <>
    <div className="md:fixed md:top-0 md:w-full z-50  bg-[rgb(40,82,150)] shadow-md">
      <div className="flex flex-row p-[6px] flex-wrap">
        <div className="flex flex-row flex-wrap">
          {RootBeginNavEntries.map((entry, i) => <NavButton key={i} {...entry} />)}
        </div>
        <div className='flex flex-row flex-wrap ml-auto'>
          {RootEndNavEntries.map((entry, i) => <NavButton key={i} {...entry} />)}
        </div>
      </div>
      <div>
        {SubNavEntries.flatMap(({ path, entries }) => {
          if (!pathname.startsWith(path)) return [];
          return [<div key={path} className="flex flex-row p-2 flex-wrap bg-[rgb(84,121,175)]">
            {entries.map((entry, i) => <NavButton key={i} {...entry} />)}
          </div>];
        })}
      </div>
    </div>
    <div className={'pt-2 ' + (subNavEnabled ? 'md:mt-[86px]' : 'md:mt-[41px]')}>
      {children}
    </div>
  </>;
}

export default Layout;
