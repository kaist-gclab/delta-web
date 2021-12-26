import { Table2, RowHeaderCell, Column, Cell } from '@blueprintjs/table';
import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Loading } from '../core/Loading';

const JobMonitorPage: React.FC = () => {
  return <h1>작업 모니터</h1>;
  const navigate = useNavigate();
};

export default observer(JobMonitorPage);
