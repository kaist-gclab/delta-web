import { lazy, useContext } from 'react';
import { Route, Routes } from 'react-router';
import styled from '@emotion/styled';
import ObjectStorageMonitorPage from '../monitoring/ObjectStorageMonitorPage';
import ProcessorNodeMonitorPage from '../monitoring/ProcessorNodeMonitorPage';
import JobMonitorPage from '../monitoring/JobMonitorPage';
import NavButton from './NavButton';
import { AuthContext } from '../config/context';
import { observer } from 'mobx-react-lite';

const AssetListPage = lazy(() => import('../asset/AssetListPage'));
const EncryptionKeyListPage = lazy(() => import('../encryptionKey/EncryptionKeyListPage'));
const AddAssetPage = lazy(() => import('../asset/AddAssetPage'));
const StartPage = lazy(() => import('../home/StartPage'));
const HelpPage = lazy(() => import('../home/HelpPage'));
const UserSettingsPage = lazy(() => import('../home/UserSettingsPage'));
const SystemSettingsPage = lazy(() => import('../home/SystemSettingsPage'));
const AssetDetailPage = lazy(() => import('../asset/AssetDetailPage'));
const AssetViewerPage = lazy(() => import('../asset/AssetViewerPage'));
const AssetTypeListPage = lazy(() => import('../assetType/AssetTypeListPage'));
const AddAssetTypePage = lazy(() => import('../assetType/AddAssetTypePage'));
const AssetTypeDetailPage = lazy(() => import('../assetType/AssetTypeDetailPage'));
const ViewerListPage = lazy(() => import('../viewer/ViewerListPage'));
const AddJobPage = lazy(() => import('../job/AddJobPage'));
const JobListPage = lazy(() => import('../job/JobListPage'));
const JobDetailPage = lazy(() => import('../job/JobDetailPage'));
const JobTypeListPage = lazy(() => import('../jobType/JobTypeListPage'));
const JobTypeDetailPage = lazy(() => import('../jobType/JobTypeDetailPage'));
const ProcessorNodeListPage = lazy(() => import('../processorNode/ProcessorNodeListPage'));
const ProcessorNodeDetailPage = lazy(() => import('../processorNode/ProcessorNodeDetailPage'));
const EncryptionKeyDetailPage = lazy(() => import('../encryptionKey/EncryptionKeyDetailPage'));
const AddEncryptionKeyPage = lazy(() => import('../encryptionKey/AddEncryptionKeyPage'));
const DashboardMonitorPage = lazy(() => import('../monitoring/DashboardMonitorPage'));
const LoginPage = lazy(() => import('../home/LoginPage'));


export const Container = styled.div`
display: grid;
grid-template-columns: 250px auto;
grid-gap: 10px;
`;

export const Sidebar = styled.div`
padding-left: 20px;
padding-top: 10px;
padding-bottom: 40px;
overflow: scroll;
height: 100vh;
`;

export const Content = styled.div`
padding-bottom: 40px;
overflow: scroll;
height: 100vh;
padding-left: 10px;
padding-right: 20px;
`;

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
    return <LoginPage />;
  }

  return <Container>
    <Sidebar>
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
    </Sidebar>
    <Content>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/settings/user" element={<UserSettingsPage />} />
        <Route path="/settings/system" element={<SystemSettingsPage />} />

        <Route path="/assets/add" element={<AddAssetPage />} />
        <Route path="/assets/list" element={<AssetListPage />} />
        <Route path="/assets/detail/:id?" element={<AssetDetailPage />} />
        <Route path="/assets/viewer" element={<AssetViewerPage />} />

        <Route path="/asset-types/add" element={<AddAssetTypePage />} />
        <Route path="/asset-types/list" element={<AssetTypeListPage />} />
        <Route path="/asset-types/detail/:id?" element={<AssetTypeDetailPage />} />

        <Route path="/viewers/list" element={<ViewerListPage />} />

        <Route path="/jobs/add" element={<AddJobPage />} />
        <Route path="/jobs/list" element={<JobListPage />} />
        <Route path="/jobs/detail/:id?" element={<JobDetailPage />} />

        <Route path="/job-types/list" element={<JobTypeListPage />} />
        <Route path="/job-types/detail/:id?" element={<JobTypeDetailPage />} />

        <Route path="/processor-nodes/list" element={<ProcessorNodeListPage />} />
        <Route path="/processor-nodes/detail/:id?" element={<ProcessorNodeDetailPage />} />

        <Route path="/encryption-keys/add" element={<AddEncryptionKeyPage />} />
        <Route path="/encryption-keys/list" element={<EncryptionKeyListPage />} />
        <Route path="/encryption-keys/detail/:id?" element={<EncryptionKeyDetailPage />} />

        <Route path="/monitoring/dashboard" element={<DashboardMonitorPage />} />
        <Route path="/monitoring/object-storage" element={<ObjectStorageMonitorPage />} />
        <Route path="/monitoring/processor-node" element={<ProcessorNodeMonitorPage />} />
        <Route path="/monitoring/jobs" element={<JobMonitorPage />} />
      </Routes>
    </Content>
  </Container>;
}

export default observer(Layout);
