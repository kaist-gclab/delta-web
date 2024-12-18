'use client';

import { FormGroup, InputGroup, Button, Dialog, Classes } from '@blueprintjs/core';
import { FormEvent, useState } from 'react';
import PageHeader from '@/core/PageHeader';

function SystemSettingsPage() {
  const [key, setKey] = useState('');
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [okDialogOpen, setOkDialogOpen] = useState(false);
  const openOkDialog = () => setOkDialogOpen(true);
  const openErrorDialog = () => setErrorDialogOpen(true);
  const closeOkDialog = () => setOkDialogOpen(false);
  const closeErrorDialog = () => setErrorDialogOpen(false);

  const submit = async () => {
    try {
      openOkDialog();
    } catch {
      openErrorDialog();
    }
  };

  return <div className="container">
    <PageHeader>시스템 설정</PageHeader>
    <FormGroup
      label="처리기 최대 응답 시간"
      labelInfo="(필수)"
      helperText="처리기 최대 응답 시간"
      labelFor="input-key">
      <InputGroup id="input-key" placeholder="초" value={key}
        onChange={(e: FormEvent<HTMLInputElement>) => { setKey(e.currentTarget.value); }} />
    </FormGroup>
    <Button large={true} intent="primary" onClick={submit}>저장</Button>
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
  </div>;
}

export default SystemSettingsPage;
