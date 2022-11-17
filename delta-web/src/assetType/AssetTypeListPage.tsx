import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router';
import { renderCellButton } from '../core/CellButton';
import { Loading } from '../core/Loading';
import { AssetTypes } from '../api';
import { HTMLTable } from '@blueprintjs/core';

const AssetTypeListPage: React.FC = () => {
  const navigate = useNavigate();
  const { data, error } = AssetTypes.useSWRGetAssetTypes();
  if (error) {
    return <div>error</div>;
  }
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: string) => {
    navigate(`/asset-types/detail/${id}`);
  };

  return <div>
    <h1>에셋 유형 목록</h1>
    <div>
      <HTMLTable>
        <thead>
          <tr>
            <th>키</th>
            <th>이름</th>
            <th>동작</th>
          </tr>
        </thead>
        <tbody>
          {data.map((assetType) => {
            return <tr key={assetType.id.toString()}>
              <td>{assetType.key}</td>
              <td>{assetType.name}</td>
              <td>{renderCellButton('상세 조회', () => goDetailPage(assetType.id.toString()))}</td>
            </tr>;
          })}
        </tbody>
      </HTMLTable>
    </div>
  </div>;
};

export default observer(AssetTypeListPage);
