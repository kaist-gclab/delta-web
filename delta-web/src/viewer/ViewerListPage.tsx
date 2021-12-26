import { Table2, RowHeaderCell, Column, Cell } from '@blueprintjs/table';
import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { JobContext } from '../config/context';
import { Loading } from '../core/Loading';

const ViewerListPage: React.FC = () => {
  const store = useContext(JobContext);
  const navigate = useNavigate();
  useEffect(() => { store.fetchAll(); }, [store]);

  const data = [{
    id: '1',
    name: 'ImageViewer',
    mediaType: 'image/png, image/bmp'
  }, {
    id: '2',
    name: 'JsonViewer',
    mediaType: 'application/json'
  }, {
    id: '3',
    name: 'ModelViewer',
    mediaType: 'model/x.stl-ascii, model/x.stl-binary, model/obj, model/delta'
  }, {
    id: '4',
    name: 'TextViewer',
    mediaType: 'text/plain'
  }];
  if (!data) {
    return <Loading />;
  }

  const goDetailPage = (id: number) => {
    navigate(`/jobs/detail/${id}`);
  };

  return <div>
    <h1>뷰어 목록</h1>
    <div>
      <Table numRows={data.length} selectionModes={[]} columnWidths={[150, 400]}
        rowHeaderCellRenderer={(i) => <RowHeaderCell name={data[i].id.toString()} />}>
        <Column name="이름" cellRenderer={(i) => <Cell>{data[i].name}</Cell>} />
        <Column name="미디어 타입" cellRenderer={(i) => <Cell>{data[i].mediaType}</Cell>} />
      </Table>
    </div>
  </div>;
};

export default observer(ViewerListPage);
