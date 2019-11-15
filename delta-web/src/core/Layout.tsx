import React from 'react';
import { Navbar, Alignment } from '@blueprintjs/core';
import { Route } from 'react-router';
import NavButton from './NavButton';
import DashboardPage from '../dashboard/DashboardPage';
import AssetsPage from '../asset/AssetsPage';
import { Container } from './Container';
import EncryptionKeysPage from '../encryptionKey/EncryptionKeysPage';

const Layout: React.FC = () => {
  return <div>
    <Navbar fixedToTop={true}>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Delta</Navbar.Heading>
        <Navbar.Divider />
        <NavButton link="/" icon="home" text="대시보드" />
        <NavButton link="/assets" icon="lightbulb" text="애셋" />
        <NavButton link="/encryptionKeys" icon="key" text="암호화 키" />
        <Navbar.Divider />
        <NavButton link="/myInfo" icon="id-number" text="내 정보" />
        <NavButton onClick={() => alert('아직 구현되지 않았습니다.')} icon="log-out" text="로그아웃" />
      </Navbar.Group>
    </Navbar>
    <div>
      <Route exact path="/" component={DashboardPage} />
      <Route path="/assets" component={AssetsPage} />
      <Route path="/encryptionKeys" component={EncryptionKeysPage} />
      <Route path="/myInfo" component={() => <Container><h2>내 정보</h2></Container>} />
    </div>
  </div>;
};

export default Layout;
