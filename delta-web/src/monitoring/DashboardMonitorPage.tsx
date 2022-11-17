import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { JobContext } from '../config/context';
import { Row as GridRow, Column as GridColumn } from '../core/Grid';
import { Loading } from '../core/Loading';

const MonitorColumn = styled(GridColumn)`
padding: 0 20px;
`;

function DashboardMonitorPage() {
  const store = useContext(JobContext);
  const navigate = useNavigate();
}

export default observer(DashboardMonitorPage);
