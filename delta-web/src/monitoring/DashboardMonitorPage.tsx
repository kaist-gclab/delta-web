import { Table2, RowHeaderCell, Column, Cell } from '@blueprintjs/table';
import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { JobContext } from '../config/context';
import { Row as GridRow, Column as GridColumn } from '../core/Grid';
import { Loading } from '../core/Loading';

const DashboardMonitorPage: React.FC = () => {
  const store = useContext(JobContext);
  const navigate = useNavigate();
};

export default observer(DashboardMonitorPage);
