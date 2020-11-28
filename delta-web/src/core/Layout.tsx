import React from 'react';
import { Route } from 'react-router';
import NavButton from './NavButton';
import DashboardPage from '../home/DashboardPage';
import AssetListPage from '../asset/AssetListPage';
import EncryptionKeyListPage from '../encryptionKey/EncryptionKeyListPage';
import AddAssetPage from '../asset/AddAssetPage';
import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns: 250px auto;
grid-gap: 20px;
`;

export const Sidebar = styled.div`
padding-left: 20px;
padding-top: 10px;
overflow: scroll;
height: 100vh;
`;

export const Content = styled.div`
padding-bottom: 40px;
overflow: scroll;
height: 100vh;
`;

export const Title = styled.span`
font-size: 20px;
`;

export const Section = styled.div`
margin-top: 20px;
`;

export const SectionTitle = styled.div`
font-size: 17px;
margin-bottom: 5px;
`;

const Layout: React.FC = () => {
  return <Container>
    <Sidebar>
      <Title>3차원 기하 모델<br />프로세싱 프레임워크 v2.0</Title>
      <Section>
        <SectionTitle>기본 기능</SectionTitle>
        <NavButton link="" text="시작" />
        <NavButton link="" text="도움말" />
        <NavButton link="" text="사용자 설정" />
        <NavButton link="" text="시스템 설정" />
      </Section>
      <Section>
        <SectionTitle>에셋</SectionTitle>
        <NavButton link="" text="추가" />
        <NavButton link="" text="목록" />
        <NavButton link="" text="상세 조회" />
        <NavButton link="" text="뷰어" />
      </Section>
      <Section>
        <SectionTitle>에셋 유형</SectionTitle>
        <NavButton link="" text="추가" />
        <NavButton link="" text="목록" />
        <NavButton link="" text="상세 조회" />
      </Section>
      <Section>
        <SectionTitle>뷰어</SectionTitle>
        <NavButton link="" text="목록" />
      </Section>
      <Section>
        <SectionTitle>작업</SectionTitle>
        <NavButton link="" text="추가" />
        <NavButton link="" text="목록" />
        <NavButton link="" text="상세 조회" />
      </Section>
      <Section>
        <SectionTitle>작업 유형</SectionTitle>
        <NavButton link="" text="목록" />
        <NavButton link="" text="상세 조회" />
      </Section>
      <Section>
        <SectionTitle>처리기 노드</SectionTitle>
        <NavButton link="" text="목록" />
        <NavButton link="" text="상세 조회" />
      </Section>
      <Section>
        <SectionTitle>암호화 키</SectionTitle>
        <NavButton link="" text="추가" />
        <NavButton link="" text="목록" />
        <NavButton link="" text="상세 조회" />
      </Section>
      <Section>
        <SectionTitle>모니터링</SectionTitle>
        <NavButton link="" text="대시보드" />
        <NavButton link="" text="오브젝트 저장소 모니터" />
        <NavButton link="" text="처리기 노드 모니터" />
        <NavButton link="" text="작업 모니터" />
      </Section>
    </Sidebar>
    <Content>
      <Route exact path="/" component={DashboardPage} />
      <Route path="/add" component={AddAssetPage} />
      <Route path="/list" component={AssetListPage} />
      <Route path="/encryptionKeys" component={EncryptionKeyListPage} />
      <Route path="/myInfo" component={() => <Container><h2>내 정보</h2></Container>} />
    </Content>
  </Container>;
};

export default Layout;
