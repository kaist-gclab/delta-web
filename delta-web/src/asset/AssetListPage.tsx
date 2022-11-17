import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { JobContext } from '../config/context';
import { renderCellButton } from '../core/CellButton';
import { Loading } from '../core/Loading';
import dayjs from 'dayjs';
import { Asset, Job, ProcessorNode } from '../api';
import { HTMLTable } from '@blueprintjs/core';

const Label = styled.label`
margin-right: 5px;
`;

const FormRow = styled.div`
margin-bottom: 10px;
`;

function getTag(a: Asset, key: string) {
  const tag = a.assetTags.find(t => t.key === key);
  if (tag) {
    return tag.value;
  }
  return '없음';
}

let timeBegin = 0;

const AssetListPage: React.FC = () => {
  return <h1>에셋 목록</h1>;
  const assetStore = useContext(AssetContext);
  const [elapsed, setElapsed] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState<number | null>(null);

  function renderAsset(a: Asset) {
    const url = getTag(a, 'Image');
    return <p key={a.id}>
      모델 번호: {a.id},
      모델 이름: {getTag(a, 'Name')},
      모델에 지정된 태그: {getTag(a, 'Tag')}
      {url !== '없음' ? <>
        <Button style={{ marginLeft: '10px' }} small={true} onClick={() => setDialogOpen(a.id)}>렌더링 결과 이미지 보기</Button>
        <Dialog style={{ padding: 0 }} isOpen={dialogOpen === a.id} onClose={() => setDialogOpen(null)}>
          <img src={url} style={{ margin: '0' }} />
          <Button style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%', marginTop: '10px', marginBottom: '10px' }}
            onClick={() => setDialogOpen(null)}>닫기</Button>
        </Dialog>
      </> : null}
    </p>;
  const navigate = useNavigate();
  const data: Asset[] = [
    {
      id: BigInt(1),
      assetType: {
        id: BigInt(3),
        key: 'MODEL',
        name: 'Model',
        assets: [],
        processorNodeCapabilities: [],
      },
      encryptionKey: {
        id: BigInt(1),
        name: '',
        value: '',
        enabled: true,
        assets: [],
      },
      mediaType: 'model/x.stl-ascii',
      storeKey: 'a986f147-03cc-4355-986a-6deaaf6dd23d',
      assetTags: [],
      parentJobExecution: {
        id: BigInt(1),
        jobId: BigInt(1),
        processorNodeId: BigInt(1),
        job: {} as any as Job,
        processorNode: {} as any as ProcessorNode,
        resultAssets: [],
        jobExecutionStatuses: [],
      },
      createdAt: dayjs(),
      assetTypeId: BigInt(3),
      encryptionKeyId: BigInt(1),
      parentJobExecutionId: BigInt(1),
      inputJobs: [],
    }
  ];
  }

  const fetch = async (name: string | null, tag: string | null) => {
    setElapsed(null);
    timeBegin = +new Date();
    await assetStore.fetchAll(name, tag);
    setElapsed((+new Date()) - timeBegin);
  };

  useEffect(() => {
    fetch(null, null);
  }, [assetStore]);
  return <div>
    <h1>에셋 목록</h1>
    <div>
      <HTMLTable>
        <thead>
          <tr>
            <th>에셋 #</th>
            <th>에셋 유형 키</th>
            <th>에셋 유형 이름</th>
            <th>미디어 형식</th>
            <th>암호화 키 이름</th>
            <th>오브젝트 저장소 키</th>
            <th>동작</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a, i) => <tr key={i.toString()}>
            <td>{a.id.toString()}</td>
            <td>{a.assetType.key}</td>
            <td>{a.assetType.name}</td>
            <td>{a.mediaType}</td>
            <td>{a.encryptionKey.name ?? '없음'}</td>
            <td>{a.storeKey}</td>
            <td>{renderCellButton('상세 조회', () => goDetailPage(data[i].id.toString()))}</td>
          </tr>)}
        </tbody>
      </HTMLTable>
    </div>
  </div>;

  const [searchKeyword, setSearchKeyword] = useState('');
  const assets = assetStore.assets;


  if (!assets) {
    return <Loading />;
  }
  // return <>
  //   <h2>모델 목록</h2>
  //   <FormRow>
  //     <Label>검색할 내용</Label>
  //     <input type="text" value={searchKeyword} onChange={({ target: { value } }) => setSearchKeyword(value)}></input>
  //   </FormRow>
  //   <FormRow>
  //     <button style={{ marginRight: '10px' }} type="button" onClick={() => fetch(searchKeyword, null)}>이름 검색</button>
  //     <button type="button" onClick={() => fetch(null, searchKeyword)}>태그 검색</button>
  //   </FormRow>
  //   {assets.map(a => renderAsset(a))}
  //   <p>{elapsed ? '목록 조회에 ' + elapsed + ' ms 소요되었습니다.' : null}</p>
  // </>;
};

export default observer(AssetListPage);
