import React, { useContext } from 'react';
import { Route } from 'react-router';
import NavButton from './NavButton';
import AssetListPage from '../asset/AssetListPage';
import EncryptionKeyListPage from '../encryptionKey/EncryptionKeyListPage';
import AddAssetPage from '../asset/AddAssetPage';
import styled from 'styled-components';
import StartPage from '../home/StartPage';
import HelpPage from '../home/HelpPage';
import UserSettingsPage from '../home/UserSettingsPage';
import SystemSettingsPage from '../home/SystemSettingsPage';
import AssetDetailPage from '../asset/AssetDetailPage';
import AssetViewerPage from '../asset/AssetViewerPage';
import AssetTypeListPage from '../assetType/AssetTypeListPage';
import AddAssetTypePage from '../assetType/AddAssetTypePage';
import AssetTypeDetailPage from '../assetType/AssetTypeDetailPage';
import ViewerListPage from '../viewer/ViewerListPage';
import AddJobPage from '../job/AddJobPage';
import JobListPage from '../job/JobListPage';
import JobDetailPage from '../job/JobDetailPage';
import JobTypeListPage from '../jobType/JobTypeListPage';
import JobTypeDetailPage from '../jobType/JobTypeDetailPage';
import ProcessorNodeListPage from '../processorNode/ProcessorNodeListPage';
import ProcessorNodeDetailPage from '../processorNode/ProcessorNodeDetailPage';
import EncryptionKeyDetailPage from '../encryptionKey/EncryptionKeyDetailPage';
import AddEncryptionKeyPage from '../encryptionKey/AddEncryptionKeyPage';
import DashboardMonitorPage from '../monitoring/DashboardMonitorPage';
import ObjectStorageMonitorPage from '../monitoring/ObjectStorageMonitorPage';
import ProcessorNodeMonitorPage from '../monitoring/ProcessorNodeMonitorPage';
import JobMonitorPage from '../monitoring/JobMonitorPage';
import { AuthContext } from '../config/context';
import LoginPage from '../home/LoginPage';
import { observer } from 'mobx-react';

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

const Layout: React.FC = () => {
  const auth = useContext(AuthContext);
  if (!auth.token) {
    return <LoginPage />;
  }

  return <Container>
    <Sidebar>
      <Title>3차원 기하 모델<br />프로세싱 프레임워크 v2.0</Title>
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
      <Route exact path="/" component={StartPage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/settings/user" component={UserSettingsPage} />
      <Route path="/settings/system" component={SystemSettingsPage} />

      <Route path="/assets/add" component={AddAssetPage} />
      <Route path="/assets/list" component={AssetListPage} />
      <Route path="/assets/detail" component={AssetDetailPage} />
      <Route path="/assets/viewer" component={AssetViewerPage} />

      <Route path="/asset-types/add" component={AddAssetTypePage} />
      <Route path="/asset-types/list" component={AssetTypeListPage} />
      <Route path="/asset-types/detail" component={AssetTypeDetailPage} />

      <Route path="/viewers/list" component={ViewerListPage} />

      <Route path="/jobs/add" component={AddJobPage} />
      <Route path="/jobs/list" component={JobListPage} />
      <Route path="/jobs/detail" component={JobDetailPage} />

      <Route path="/job-types/list" component={JobTypeListPage} />
      <Route path="/job-types/detail" component={JobTypeDetailPage} />

      <Route path="/processor-nodes/list" component={ProcessorNodeListPage} />
      <Route path="/processor-nodes/detail" component={ProcessorNodeDetailPage} />

      <Route path="/encryption-keys/add" component={AddEncryptionKeyPage} />
      <Route path="/encryption-keys/list" component={EncryptionKeyListPage} />
      <Route path="/encryption-keys/detail/:id?" component={EncryptionKeyDetailPage} />

      <Route path="/monitoring/dashboard" component={DashboardMonitorPage} />
      <Route path="/monitoring/object-storage" component={ObjectStorageMonitorPage} />
      <Route path="/monitoring/processor-node" component={ProcessorNodeMonitorPage} />
      <Route path="/monitoring/jobs" component={JobMonitorPage} />
    </Content>
  </Container>;
};

export default observer(Layout);
