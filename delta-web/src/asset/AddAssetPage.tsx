import { FormGroup, InputGroup, Button, Dialog, Classes } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import React, { FormEvent, useState } from 'react';

const AddAssetPage: React.FC = () => {
  return <h1>에셋 추가</h1>;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [modelName, setModelName] = useState('');
  const [modelTag, setModelTag] = useState('');
  const [uploading, setUploading] = useState(false);
  const store = useContext(AssetTypeContext);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [okDialogOpen, setOkDialogOpen] = useState(false);
  const openOkDialog = () => setOkDialogOpen(true);
  const openErrorDialog = () => setErrorDialogOpen(true);
  const closeOkDialog = () => setOkDialogOpen(false);
  const closeErrorDialog = () => setErrorDialogOpen(false);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length >= 1) {
      setSelectedFile(e.target.files[0]);
  const submit = async () => {
    try {
      await store.create({ key, name }) as any;
      openOkDialog();
    } catch {
      openOkDialog();
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
    <Dialog
      icon="tick"
      isOpen={okDialogOpen}
      onClose={closeOkDialog}
      title="추가 성공"
      canOutsideClickClose={false}>
      <div className={Classes.DIALOG_BODY}>
        <p>성공적으로 추가되었습니다.</p>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button onClick={closeOkDialog}>닫기</Button>
        </div>
      </div>
    </Dialog>
    <Dialog
      icon="issue"
      isOpen={errorDialogOpen}
      onClose={closeErrorDialog}
      title="추가 실패"
      canOutsideClickClose={false}>
      <div className={Classes.DIALOG_BODY}>
        <p>추가하는 데 실패했습니다.</p>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button onClick={closeErrorDialog}>닫기</Button>
        </div>
      </div>
    </Dialog>

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
