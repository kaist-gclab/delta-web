import { lazy, Suspense, useContext } from 'react';
import styled from '@emotion/styled';
import NavButton from './NavButton';
import { AuthContext } from '../config/context';
import { observer } from 'mobx-react-lite';
import { Loading } from './Loading';
import Routes from './Routes';

const LoginPage = lazy(() => import('../home/LoginPage'));

export const Title = styled.span`
font-size: 20px;
font-weight: bold;
`;

export const Section = styled.div`
margin-top: 20px;
`;

export const SectionTitle = styled.div`
font-size: 17px;
margin-bottom: 5px;
font-weight: bold;
`;

function Layout() {
  const auth = useContext(AuthContext);
  if (!auth.token) {
    return <Suspense fallback={<Loading />}>
      <LoginPage />
    </Suspense>;
  }

  return <div>
    <div>
      <Title>3차원 기하 모델<br />프로세싱 프레임워크 v4.0</Title>
      <Section>
        <SectionTitle>기본 기능</SectionTitle>
        <NavButton link="/" text="시작" />
        <NavButton link="/help" text="도움말" />
        <NavButton link="/settings/user" text="사용자 설정" />
        <NavButton link="/settings/system" text="시스템 설정" />
        <NavButton onClick={() => { auth.logout(); }} text="로그아웃" />
      </Section>
      <Section>
        <SectionTitle>에셋</SectionTitle>
        <NavButton link="/assets/add" text="추가" />
        <NavButton link="/assets/list" text="목록" />
        <NavButton link="/assets/detail" text="상세 조회" />
        <NavButton link="/assets/viewer" text="뷰어" />
      </Section>
      <Section>
        <SectionTitle>에셋 유형</SectionTitle>
        <NavButton link="/asset-types/add" text="추가" />
        <NavButton link="/asset-types/list" text="목록" />
        <NavButton link="/asset-types/detail" text="상세 조회" />
      </Section>
      <Section>
        <SectionTitle>뷰어</SectionTitle>
        <NavButton link="/viewers/list" text="목록" />
      </Section>
      <Section>
        <SectionTitle>작업</SectionTitle>
        <NavButton link="/jobs/add" text="추가" />
        <NavButton link="/jobs/list" text="목록" />
        <NavButton link="/jobs/detail" text="상세 조회" />
      </Section>
      <Section>
        <SectionTitle>작업 유형</SectionTitle>
        <NavButton link="/job-types/list" text="목록" />
        <NavButton link="/job-types/detail" text="상세 조회" />
      </Section>
      <Section>
        <SectionTitle>처리기 노드</SectionTitle>
        <NavButton link="/processor-nodes/list" text="목록" />
        <NavButton link="/processor-nodes/detail" text="상세 조회" />
      </Section>
      <Section>
        <SectionTitle>암호화 키</SectionTitle>
        <NavButton link="/encryption-keys/add" text="추가" />
        <NavButton link="/encryption-keys/list" text="목록" />
        <NavButton link="/encryption-keys/detail" text="상세 조회" />
      </Section>
      <Section>
        <SectionTitle>모니터링</SectionTitle>
        <NavButton link="/monitoring/dashboard" text="대시보드" />
        <NavButton link="/monitoring/object-storage" text="오브젝트 저장소 모니터" />
        <NavButton link="/monitoring/processor-node" text="처리기 노드 모니터" />
        <NavButton link="/monitoring/jobs" text="작업 모니터" />
      </Section>
    </div>
    <div>
      <Routes />
    </div>
  </div>;
}

export default observer(Layout);
