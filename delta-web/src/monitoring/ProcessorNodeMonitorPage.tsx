import { Table2, RowHeaderCell, Column, Cell } from '@blueprintjs/table';
import { observer } from 'mobx-react';
import React from 'react';
import { useNavigate } from 'react-router';

const ProcessorNodeMonitorPage: React.FC = () => {
  return <h1>처리기 노드 모니터</h1>;
  const navigate = useNavigate();
};

export default observer(ProcessorNodeMonitorPage);
