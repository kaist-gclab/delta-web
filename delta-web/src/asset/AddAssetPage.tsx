import { FormGroup, InputGroup, Button, Dialog, Classes } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { FormEvent, useState } from 'react';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';
import { Assets } from '../api';

function AddAssetPage() {
  const [assetTypeId, setAssetTypeId] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [objectStoreKey, setObjectStoreKey] = useState('');
  const [encryptionKeyId, setEncryptionKeyId] = useState('');
  const [tagKey, setTagKey] = useState('');
  const [tagValue, setTagValue] = useState('');

  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [okDialogOpen, setOkDialogOpen] = useState(false);
  const openOkDialog = () => setOkDialogOpen(true);
  const openErrorDialog = () => setErrorDialogOpen(true);
  const closeOkDialog = () => setOkDialogOpen(false);
  const closeErrorDialog = () => setErrorDialogOpen(false);

  const submit = async () => {
    try {
      await Assets.createAsset({
        assetTypeId: BigInt(assetTypeId),
        mediaType,
        storeKey: objectStoreKey,
        createAssetTagRequest: [],
        parentJobExecutionId: null,
        encryptionKeyId: null,
      });
      openOkDialog();
    } catch {
      openOkDialog();
    }
  };

  return <Container reducedTopPadding>
    <PageHeader>애셋 추가</PageHeader>
    <FormGroup
      label="애셋 유형 번호"
      labelInfo="(필수)"
      helperText="애셋 유형 번호"
      labelFor="input-key">
      <InputGroup id="input-key" placeholder="번호" value={assetTypeId}
        onChange={(e: FormEvent<HTMLInputElement>) => { setAssetTypeId(e.currentTarget.value); }} />
    </FormGroup>
    <FormGroup
      label="애셋 암호화 키 번호"
      helperText="애셋 암호화 키 번호"
      labelFor="input-key">
      <InputGroup id="input-key" placeholder="번호" value={encryptionKeyId}
        onChange={(e: FormEvent<HTMLInputElement>) => { setEncryptionKeyId(e.currentTarget.value); }} />
    </FormGroup>
    <FormGroup
      label="애셋 미디어 타입"
      labelInfo="(필수)"
      helperText="애셋 미디어 타입"
      labelFor="input-key">
      <InputGroup id="input-key" placeholder="미디어 타입" value={mediaType}
        onChange={(e: FormEvent<HTMLInputElement>) => { setMediaType(e.currentTarget.value); }} />
    </FormGroup>
    <FormGroup
      label="애셋 오브젝트 저장소 키"
      labelInfo="(필수)"
      helperText="애셋 오브젝트 저장소 키"
      labelFor="input-key">
      <InputGroup id="input-key" placeholder="오브젝트 저장소 키"
        onChange={(e: FormEvent<HTMLInputElement>) => { setKey(e.currentTarget.value); }} />
    </FormGroup>
    <FormGroup
      label="애셋 태그 키"
      helperText="애셋 태그 키"
      labelFor="input-key">
      <InputGroup id="input-key" placeholder="문자열"
        onChange={(e: FormEvent<HTMLInputElement>) => { setKey(e.currentTarget.value); }} />
    </FormGroup>
    <FormGroup
      label="애셋 태그 값"
      helperText="애셋 태그 값"
      labelFor="input-key">
      <InputGroup id="input-key" placeholder="문자열"
        onChange={(e: FormEvent<HTMLInputElement>) => { setKey(e.currentTarget.value); }} />
    </FormGroup>
    <Button large={true} intent="primary" onClick={submit}>추가</Button>
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
  </Container>;
}

export default observer(AddAssetPage);
