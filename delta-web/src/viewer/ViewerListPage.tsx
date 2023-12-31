import { HTMLTable } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import Container from '../core/Container';
import { Loading } from '../core/NonIdealStates';
import PageHeader from '../core/PageHeader';

function ViewerListPage() {
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

  return <Container reducedTopPadding>
    <PageHeader>뷰어 목록</PageHeader>
    <div>
      <HTMLTable>
        <thead>
          <tr>
            <th>이름</th>
            <th>미디어 타입</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => <tr key={e.id.toString()}>
            <td>{e.name}</td>
            <td>{e.mediaType}</td>
          </tr>)}
        </tbody>
      </HTMLTable>
    </div>
  </Container>;
}

export default ViewerListPage;
