import { Icon } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

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

const StartPage: React.FC = () => {
  return <>
    <h1>시작</h1>
    <h2>도움말</h2>
    <StartButton to="help">
      <StartIcon iconSize={IconSize} icon="book" />
      <StartLabel>도움말</StartLabel>
    </StartButton>
    <h2>자주 사용하는 기능</h2>
    <div>
      <StartButton to="/assets/add">
        <StartIcon iconSize={IconSize} icon="cloud-upload" />
        <StartLabel>에셋 추가</StartLabel>
      </StartButton>
      <StartButton to="/assets/list">
        <StartIcon iconSize={IconSize} icon="cloud" />
        <StartLabel>에셋 목록</StartLabel>
      </StartButton>
      <StartButton to="/jobs/add">
        <StartIcon iconSize={IconSize} icon="th-derived" />
        <StartLabel>작업 추가</StartLabel>
      </StartButton>
      <StartButton to="/jobs/list">
        <StartIcon iconSize={IconSize} icon="th" />
        <StartLabel>작업 목록</StartLabel>
      </StartButton>
      <br />
      <StartButton to="/monitoring/dashboard">
        <StartIcon iconSize={IconSize} icon="dashboard" />
        <StartLabel>대시보드</StartLabel>
      </StartButton>
    </div>
  </>
};

export default observer(StartPage);
