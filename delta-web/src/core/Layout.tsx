import { lazy, Suspense, useContext, useMemo } from 'react';
import styled from '@emotion/styled';
import NavButton from './NavButton';
import { observer } from 'mobx-react-lite';
import { Loading } from './Loading';
import { Alignment, Navbar } from '@blueprintjs/core';
import { useLocation } from 'react-router';
import { AuthContext } from '../config/context';
import Routes from './Routes';

const LoginPage = lazy(() => import('../home/LoginPage'));

const NavbarRoot = styled(Navbar)`
overflow-x: auto;
overflow-y: hidden;
z-index: 39;
`;

const NavbarRootContent = styled.div`
min-width: 800px;
`;

const SubNavbar = styled(Navbar)`
overflow-x: auto;
overflow-y: hidden;
z-index: 38;
`;

function Layout() {
  const location = useLocation();
  const auth = useContext(AuthContext);
  const subNavbarCode = useMemo(() => {
    const pathname = location.pathname;
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
  }, [location]);

  if (!auth.token) {
    return <Suspense fallback={<Loading />}>
      <LoginPage />
    </Suspense>;
  }

  return <div>
    <NavbarRoot fixedToTop>
      <NavbarRootContent>
        <Navbar.Group align={Alignment.LEFT}>
          <NavButton icon="cloud" text="애셋" />
          <NavButton icon="form" text="작업" />
          <NavButton icon="cog" text="처리기 노드" />
          <NavButton icon="key" text="암호화 키" />
          <NavButton icon="dashboard" text="모니터링" />
          <NavButton link="/start" icon="home" text="시작" />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <NavButton link="/help" icon="help" text="도움말" />
          <NavButton icon="wrench" text="설정" />
          <NavButton onClick={() => { auth.logout(); }} icon="log-out" text="로그아웃" />
        </Navbar.Group>
      </NavbarRootContent>
    </NavbarRoot>
    <div>
      <div>
        <SectionTitle>작업</SectionTitle>
        <NavButton link="/jobs/add" text="작업 추가" />
        <NavButton link="/jobs/list" text="작업 목록" />
        <NavButton link="/jobs/detail" text="작업 상세 조회" />
        <NavButton link="/job-types/list" text="작업 유형 목록" />
        <NavButton link="/job-types/detail" text="작업 유형 상세 조회" />
      </div>
      <div>
        <SectionTitle>처리기 노드</SectionTitle>
        <NavButton link="/processor-nodes/list" text="목록" />
        <NavButton link="/processor-nodes/detail" text="상세 조회" />
      </div>
      <div>
        <SectionTitle>암호화 키</SectionTitle>
        <NavButton link="/encryption-keys/add" text="추가" />
        <NavButton link="/encryption-keys/list" text="목록" />
        <NavButton link="/encryption-keys/detail" text="상세 조회" />
      </div>
      <div>
        <SectionTitle>모니터링</SectionTitle>
        <NavButton link="/monitoring/dashboard" text="대시보드" />
        <NavButton link="/monitoring/object-storage" text="오브젝트 저장소 모니터" />
        <NavButton link="/monitoring/processor-node" text="처리기 노드 모니터" />
        <NavButton link="/monitoring/jobs" text="작업 모니터" />
      </div>
      {subNavbarCode === 'asset' &&
        <SubNavbar className="delta-navbar-sub" fixedToTop>
          <Navbar.Group align={Alignment.LEFT} style={{ minWidth: '800px' }}>
            <Navbar.Heading style={{ userSelect: 'none' }}>애셋</Navbar.Heading>
            <NavButton link="/assets/add" text="애셋 추가" />
            <NavButton link="/assets/list" text="애셋 목록" />
            <NavButton link="/assets/detail" text="애셋 상세 조회" />
            <NavButton link="/assets/viewer" text="애셋 뷰어" />
            <NavButton link="/asset-types/add" text="애셋 유형 추가" />
            <NavButton link="/asset-types/list" text="애셋 유형 목록" />
            <NavButton link="/asset-types/detail" text="애셋 유형 상세 조회" />
          </Navbar.Group>
        </SubNavbar>}
      {subNavbarCode === 'settings' &&
        <SubNavbar className="delta-navbar-sub" fixedToTop>
          <Navbar.Group align={Alignment.LEFT} style={{ minWidth: '800px' }}>
            <Navbar.Heading style={{ userSelect: 'none' }}>설정</Navbar.Heading>
            <NavButton link="/settings/user" text="사용자 설정" />
            <NavButton link="/settings/system" text="시스템 설정" />
            <NavButton link="/viewers/list" text="뷰어 목록" />
          </Navbar.Group>
        </SubNavbar>}
    </div>
    <div>
      <Routes />
    </div>
  </div>;
}

export default observer(Layout);
