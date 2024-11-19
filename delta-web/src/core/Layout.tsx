'use client';

import { ReactNode, Suspense, useContext, useMemo } from 'react';
import NavButton from './NavButton';
import { Alignment, Navbar } from '@blueprintjs/core';
import { AuthContext } from '../config/context';
import LoginForm from './LoginForm';
import { Loading } from './NonIdealStates';
import { usePathname } from 'next/navigation';

function NavbarRoot({ fixedToTop, children }: { fixedToTop?: boolean, children: ReactNode }) {
  return <Navbar fixedToTop={fixedToTop} style={{
    overflowX: 'auto',
    overflowY: 'hidden',
    zIndex: 39,
  }}>
    {children}
  </Navbar>;
}

function NavbarRootContent({ children }: { children: ReactNode }) {
  return <div style={{
    minWidth: '800px',
  }}>
    {children}
  </div>;
}

function SubNavbar({ fixedToTop, children, className }: {
  fixedToTop?: boolean,
  children: ReactNode,
  className?: string,
}) {
  return <Navbar fixedToTop={fixedToTop} style={{
    background: '#efefef',
    overflowX: 'auto',
    overflowY: 'hidden',
    zIndex: 38,
  }} className={className}>
    {children}
  </Navbar>;
}

function Layout({ children }: { children: ReactNode }) {
  const auth = useContext(AuthContext);
  const pathname = usePathname();
  const subNavbarCode = useMemo(() => {
    if (pathname.startsWith('/asset')) {
      return 'asset';
    }
    if (pathname.startsWith('/job')) {
      return 'job';
    }
    if (pathname.startsWith('/node')) {
      return 'node';
    }
    if (pathname.startsWith('/key')) {
      return 'key';
    }
    if (pathname.startsWith('/monitoring')) {
      return 'monitoring';
    }
    if (pathname.startsWith('/settings')) {
      return 'settings';
    }
    return;
  }, [pathname]);

  if (!auth.token) {
    return <Suspense fallback={<Loading />}>
      <LoginForm />
    </Suspense>;
  }

  return <div>
    <NavbarRoot fixedToTop>
      <NavbarRootContent>
        <Navbar.Group align={Alignment.LEFT}>
          <NavButton link="/start" icon="home" text="시작" />
          <NavButton link="/asset" icon="cloud" text="애셋" />
          <NavButton link="/job" icon="form" text="작업" />
          <NavButton link="/node" icon="cog" text="처리기 노드" />
          <NavButton link="/key" icon="key" text="암호화 키" />
          <NavButton link="/monitoring" icon="dashboard" text="모니터링" />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <NavButton link="/help" icon="help" text="도움말" />
          <NavButton link="/settings" icon="wrench" text="설정" />
          <NavButton onClick={() => { auth.logout(); }} icon="log-out" text="로그아웃" />
        </Navbar.Group>
      </NavbarRootContent>
    </NavbarRoot>
    <div>
      {subNavbarCode === 'asset' &&
        <SubNavbar className="delta-navbar-sub" fixedToTop>
          <Navbar.Group align={Alignment.LEFT} style={{ minWidth: '800px' }}>
            <Navbar.Heading style={{ userSelect: 'none' }}>애셋</Navbar.Heading>
            <NavButton link="/asset/assets/add" text="애셋 추가" />
            <NavButton link="/asset/assets/list" text="애셋 목록" />
            <NavButton link="/asset/assets/detail" text="애셋 상세 조회" />
            <NavButton link="/asset/assets/viewer" text="애셋 뷰어" />
            <NavButton link="/asset/asset-types/add" text="애셋 유형 추가" />
            <NavButton link="/asset/asset-types/list" text="애셋 유형 목록" />
            <NavButton link="/asset/asset-types/detail" text="애셋 유형 상세 조회" />
          </Navbar.Group>
        </SubNavbar>}
      {subNavbarCode === 'job' &&
        <SubNavbar className="delta-navbar-sub" fixedToTop>
          <Navbar.Group align={Alignment.LEFT} style={{ minWidth: '800px' }}>
            <Navbar.Heading style={{ userSelect: 'none' }}>작업</Navbar.Heading>
            <NavButton link="/job/jobs/add" text="작업 추가" />
            <NavButton link="/job/jobs/list" text="작업 목록" />
            <NavButton link="/job/jobs/detail" text="작업 상세 조회" />
            <NavButton link="/job/job-types/list" text="작업 유형 목록" />
            <NavButton link="/job/job-types/detail" text="작업 유형 상세 조회" />
          </Navbar.Group>
        </SubNavbar>}
      {subNavbarCode === 'node' &&
        <SubNavbar className="delta-navbar-sub" fixedToTop>
          <Navbar.Group align={Alignment.LEFT} style={{ minWidth: '800px' }}>
            <Navbar.Heading style={{ userSelect: 'none' }}>처리기 노드</Navbar.Heading>
            <NavButton link="/node/processor-nodes/list" text="목록" />
            <NavButton link="/node/processor-nodes/detail" text="상세 조회" />
          </Navbar.Group>
        </SubNavbar>}
      {subNavbarCode === 'key' &&
        <SubNavbar className="delta-navbar-sub" fixedToTop>
          <Navbar.Group align={Alignment.LEFT} style={{ minWidth: '800px' }}>
            <Navbar.Heading style={{ userSelect: 'none' }}>암호화 키</Navbar.Heading>
            <NavButton link="/key/encryption-keys/add" text="추가" />
            <NavButton link="/key/encryption-keys/list" text="목록" />
            <NavButton link="/key/encryption-keys/detail" text="상세 조회" />
          </Navbar.Group>
        </SubNavbar>}
      {subNavbarCode === 'monitoring' &&
        <SubNavbar className="delta-navbar-sub" fixedToTop>
          <Navbar.Group align={Alignment.LEFT} style={{ minWidth: '800px' }}>
            <Navbar.Heading style={{ userSelect: 'none' }}>모니터링</Navbar.Heading>
            <NavButton link="/monitoring/dashboard" text="대시보드" />
            <NavButton link="/monitoring/object-storage" text="오브젝트 저장소 모니터" />
            <NavButton link="/monitoring/processor-node" text="처리기 노드 모니터" />
            <NavButton link="/monitoring/jobs" text="작업 모니터" />
          </Navbar.Group>
        </SubNavbar>}
      {subNavbarCode === 'settings' &&
        <SubNavbar className="delta-navbar-sub" fixedToTop>
          <Navbar.Group align={Alignment.LEFT} style={{ minWidth: '800px' }}>
            <Navbar.Heading style={{ userSelect: 'none' }}>설정</Navbar.Heading>
            <NavButton link="/settings/user" text="사용자 설정" />
            <NavButton link="/settings/system" text="시스템 설정" />
            <NavButton link="/settings/viewers/list" text="뷰어 목록" />
          </Navbar.Group>
        </SubNavbar>}
    </div>
    <div className={subNavbarCode ? 'delta-navbar-sub' : undefined}>
      {children}
    </div>
  </div>;
}

export default Layout;
