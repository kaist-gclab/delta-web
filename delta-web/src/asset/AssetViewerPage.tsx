import { observer } from 'mobx-react';
import React from 'react';
import { useParams, useNavigate } from 'react-router';
import styled from '@emotion/styled';

const AssetViewerPage: React.FC = () => {
  return <h1>에셋 뷰어</h1>;
  const params = useParams<'id'>();
  const navigate = useNavigate();
};

export default observer(AssetViewerPage);
