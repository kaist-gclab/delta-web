import { observer } from 'mobx-react';
import React, { FormEvent, useContext, useState } from 'react';
import styled from '@emotion/styled';
import { AssetContext, AssetTypeContext } from '../config/context';
import dayjs from 'dayjs';

const Label = styled.label`
margin-right: 5px;
`;

const FormRow = styled.div`
margin-bottom: 10px;
`;

const AddAssetPage: React.FC = () => {
  return <h1>에셋 추가</h1>;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [modelName, setModelName] = useState('');
  const [modelTag, setModelTag] = useState('');
  const [uploading, setUploading] = useState(false);
  const store = useContext(AssetTypeContext);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length >= 1) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      return;
    }
    const reader = new FileReader();
    const eventTimestamp = dayjs().toISOString();
    setUploading(true);
    reader.onload = async () => {
      if (reader.result === null) {
        setUploading(false);
        return;
      }
      try {
        await assetStore.addModel(modelName, modelTag, reader.result as string, eventTimestamp) as any as Promise<void>;
        alert('추가되었습니다.');
      } catch {
        alert('모델 추가에 실패했습니다.');
      } finally {
        setUploading(false);
      }
    };
    reader.readAsDataURL(selectedFile);
  };

  return <>
    <h2>모델 추가</h2>
    <FormRow>
      <Label>모델 이름</Label>
      <input type="text" value={modelName} onChange={({ target: { value } }) => setModelName(value)}></input>
    </FormRow>
    <FormRow>
      <Label>모델 태그</Label>
      <input type="text" value={modelTag} onChange={({ target: { value } }) => setModelTag(value)}></input>
    </FormRow>
    <FormRow>
      <input type="file" name="file" onChange={e => handleFileInput(e)} />
    </FormRow>
    <FormRow>
      <button disabled={uploading} type="button" onClick={() => handleSubmit()}>모델 추가 완료</button>
    </FormRow>
  </>;
};

export default observer(AddAssetPage);
