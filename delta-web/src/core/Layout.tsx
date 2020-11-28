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
        <NavButton link="/" text="대시보드" />
        <NavButton link="/add" text="모델 추가" />
        <NavButton link="/list" text="모델 목록" />
      </Section>
      {/* <NavButton link="/encryptionKeys" icon="key" text="암호화 키" /> */}
      {/* <Navbar.Divider />
        <NavButton link="/myInfo" icon="id-number" text="내 정보" />
        <NavButton onClick={() => alert('아직 구현되지 않았습니다.')} icon="log-out" text="로그아웃" /> */}
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
