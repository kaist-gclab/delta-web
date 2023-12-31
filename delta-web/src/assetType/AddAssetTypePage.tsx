import { Button, Classes, Dialog, FormGroup, InputGroup } from '@blueprintjs/core';
import { FormEvent, useState } from 'react';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';
import { AssetTypes } from '../api';

function AddAssetTypePage() {
  const [key, setKey] = useState('');
  const [name, setName] = useState('');
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [okDialogOpen, setOkDialogOpen] = useState(false);
  const openOkDialog = () => setOkDialogOpen(true);
  const openErrorDialog = () => setErrorDialogOpen(true);
  const closeOkDialog = () => setOkDialogOpen(false);
  const closeErrorDialog = () => setErrorDialogOpen(false);

  const submit = async () => {
    try {
      await AssetTypes.create({ key, name });
      openOkDialog();
    } catch {
      openErrorDialog();
    }
  };

  return <Container reducedTopPadding>
    <PageHeader>애셋 유형 추가</PageHeader>
    <FormGroup
      label="키"
      labelInfo="(필수)"
      helperText="애셋 유형 키"
      labelFor="input-key">
      <InputGroup id="input-key" placeholder="키" value={key}
        onChange={(e: FormEvent<HTMLInputElement>) => { setKey(e.currentTarget.value); }} />
    </FormGroup>
    <FormGroup
      label="이름"
      labelInfo="(필수)"
      helperText="애셋 유형 이름"
      labelFor="input-name">
      <InputGroup id="input-name" placeholder="이름" value={name}
        onChange={(e: FormEvent<HTMLInputElement>) => { setName(e.currentTarget.value); }} />
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

export default AddAssetTypePage;
