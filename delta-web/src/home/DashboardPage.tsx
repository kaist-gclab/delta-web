import { observer } from 'mobx-react';
import moment from 'moment';
import React, { useContext, useEffect } from 'react';
import { DashboardContext } from '../config/context';
import { Container } from '../core/Container';
import { localDateTimeMicro } from '../core/datetime';
import { Loading } from '../core/Loading';

const DashboardPage = () => {
  const dashboardStore = useContext(DashboardContext);
  useEffect(() => { dashboardStore.fetchStats(); }, [dashboardStore]);

  if (!dashboardStore.statsList) {
    return <Loading />
  }
  return <Container>
    <h2>대시보드</h2>
    <h3>최근 이벤트 목록</h3>
    {dashboardStore.statsList.map(s => <p key={s.statsTimestamp + '$' + s.eventTimestamp + '$' + s.content}>
      이벤트 시작: {localDateTimeMicro(s.eventTimestamp)},
      이벤트 수집 완료: {localDateTimeMicro(s.statsTimestamp)},
      지연: {(moment(s.statsTimestamp).valueOf() - moment(s.eventTimestamp).valueOf()) + ' ms'},
      내용: {s.content}
    </p>)}
  </Container>;
};

export default observer(DashboardPage);
