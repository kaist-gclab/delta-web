import { observer } from 'mobx-react';
import React from 'react';
import { useNavigate } from 'react-router';

const ObjectStorageMonitorPage: React.FC = () => {
  return <h1>오브젝트 저장소 모니터</h1>;
  const navigate = useNavigate();
};

export default observer(ObjectStorageMonitorPage);
