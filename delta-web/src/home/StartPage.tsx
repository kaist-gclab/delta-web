import { Icon } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';

const StartButton = styled(NavLink)`
text-align: center;
display: inline-block;
margin: 20px;
width: 110px;
height: 110px;
padding-top: 15px;
border: 1px solid #bbb;
border-radius: 15px;
cursor: pointer;
color: black;
:hover{
  color: black;
}
`;

const StartIcon = styled(Icon)``;

const StartLabel = styled.div`
font-size: 22px;
margin-top: 10px;
`;

const IconSize = 40;

function StartPage() {
  return <Container reducedTopPadding>
    <PageHeader>시작</PageHeader>
    <h2>도움말</h2>
    <StartButton to="/help">
      <StartIcon iconSize={IconSize} icon="book" />
      <StartLabel>도움말</StartLabel>
    </StartButton>
    <h2>자주 사용하는 기능</h2>
    <div>
      <StartButton to="/asset/assets/add">
        <StartIcon iconSize={IconSize} icon="cloud-upload" />
        <StartLabel>애셋 추가</StartLabel>
      </StartButton>
      <StartButton to="/asset/assets/list">
        <StartIcon iconSize={IconSize} icon="cloud" />
        <StartLabel>애셋 목록</StartLabel>
      </StartButton>
      <StartButton to="/job/jobs/add">
        <StartIcon iconSize={IconSize} icon="th-derived" />
        <StartLabel>작업 추가</StartLabel>
      </StartButton>
      <StartButton to="/job/jobs/list">
        <StartIcon iconSize={IconSize} icon="th" />
        <StartLabel>작업 목록</StartLabel>
      </StartButton>
      <br />
      <StartButton to="/monitoring/dashboard">
        <StartIcon iconSize={IconSize} icon="dashboard" />
        <StartLabel>대시보드</StartLabel>
      </StartButton>
    </div>
  </Container>
}

export default observer(StartPage);
