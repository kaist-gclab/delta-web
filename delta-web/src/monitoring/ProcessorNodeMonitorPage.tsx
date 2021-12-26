import { Table2, RowHeaderCell, Column, Cell } from '@blueprintjs/table';
import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { JobContext } from '../config/context';
import { Loading } from '../core/Loading';

const ProcessorNodeMonitorPage: React.FC = () => {
  const store = useContext(JobContext);
  const navigate = useNavigate();
};

export default observer(ProcessorNodeMonitorPage);
