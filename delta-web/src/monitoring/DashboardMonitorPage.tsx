import { observer } from 'mobx-react';
import React from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';

const DashboardMonitorPage: React.FC = () => {
  return <h1>모니터링 대시보드</h1>;
  const navigate = useNavigate();
};

export default observer(DashboardMonitorPage);
