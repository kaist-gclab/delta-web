import { Cell, Column, RowHeaderCell, Table2 } from '@blueprintjs/table';
import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { JobContext } from '../config/context';
import { renderCellButton } from '../core/CellButton';
import { Loading } from '../core/Loading';
import { Asset } from './types';
import dayjs from 'dayjs';

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
