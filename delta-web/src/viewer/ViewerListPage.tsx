import { observer } from 'mobx-react';
import React from 'react';
import { useNavigate } from 'react-router';

const ViewerListPage: React.FC = () => {
  return <h1>뷰어 목록</h1>;
  const navigate = useNavigate();
};

export default observer(ViewerListPage);
