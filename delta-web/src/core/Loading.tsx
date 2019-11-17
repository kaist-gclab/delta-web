import React from 'react';

export const Loading: React.FC = () => {
  return <div className="bp3-non-ideal-state">
    <div className="bp3-non-ideal-state-visual">
      <span className="bp3-icon bp3-icon-refresh"></span>
    </div>
    <h4 className="bp3-heading">불러오는 중</h4>
    <div>잠시만 기다려 주세요.</div>
  </div>;
};