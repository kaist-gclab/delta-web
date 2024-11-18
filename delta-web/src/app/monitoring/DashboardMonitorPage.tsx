import styled from '@emotion/styled';
import { Row as GridRow, Column as GridColumn } from '../core/Grid';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';

const MonitorColumn = styled(GridColumn)`
padding: 0 20px;
`;

function DashboardMonitorPage() {
  return <Container reducedTopPadding>
    <PageHeader>모니터링 대시보드</PageHeader>
    <GridColumn>
      <GridRow>
        <MonitorColumn>
          <h2>통합</h2>
        </MonitorColumn>
        <MonitorColumn>
          <h2>오브젝트 저장소</h2>
        </MonitorColumn>
      </GridRow>
      <GridRow>
        <MonitorColumn>
          <h2>처리기 노드</h2>
        </MonitorColumn>
        <MonitorColumn>
          <h2>작업</h2>
        </MonitorColumn>
      </GridRow>
    </GridColumn>
  </Container>;
}

export default DashboardMonitorPage;
