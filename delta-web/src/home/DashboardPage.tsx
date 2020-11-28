import { observer } from 'mobx-react';
import moment from 'moment';
import React, { useContext, useEffect } from 'react';
import { HomeContext } from '../config/context';
import { localDateTimeMicro } from '../core/datetime';
import { Loading } from '../core/Loading';

const DashboardPage = () => {
  const home = useContext(HomeContext);
  useEffect(() => { home.fetchStats(); }, [home]);

  if (!home.statsList) {
    return <Loading />
  }
  return <>
    <h2>대시보드</h2>
    <h3>최근 이벤트 목록</h3>
    {home.statsList.map(s => <p key={s.statsTimestamp + '$' + s.eventTimestamp + '$' + s.content}>
      이벤트 시작: {localDateTimeMicro(s.eventTimestamp)},
      이벤트 수집 완료: {localDateTimeMicro(s.statsTimestamp)},
      지연: {(moment(s.statsTimestamp).valueOf() - moment(s.eventTimestamp).valueOf()) + ' ms'},
      내용: {s.content}
    </p>)}
  </>;
};

export default observer(DashboardPage);
