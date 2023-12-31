import { FormGroup, InputGroup, Button, Dialog, Classes } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { FormEvent, useState } from 'react';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';

function AddJobPage() {
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
      openOkDialog();
    } catch {
      openErrorDialog();
    }
  };

  return <Container reducedTopPadding>
    <PageHeader>작업 추가</PageHeader>
    <FormGroup
      label="작업 유형 번호"
      labelInfo="(필수)"
      helperText="작업 유형 번호"
      labelFor="input-key">
      <InputGroup id="input-key" placeholder="번호" value={key}
        onChange={(e: FormEvent<HTMLInputElement>) => { setKey(e.currentTarget.value); }} />
    </FormGroup>
    <FormGroup
      label="입력 애셋 번호"
      helperText="입력 애셋 번호"
      labelFor="input-name">
      <InputGroup id="input-name" placeholder="번호" value={name}
        onChange={(e: FormEvent<HTMLInputElement>) => { setName(e.currentTarget.value); }} />
    </FormGroup>
    <FormGroup
      label="인수"
      labelInfo="(필수)"
      helperText="작업 인수"
      labelFor="input-name">
      <InputGroup id="input-name" placeholder="문자열" value={name}
        onChange={(e: FormEvent<HTMLInputElement>) => { setName(e.currentTarget.value); }} />
    </FormGroup>
    <FormGroup
      label="할당 처리기 노드 번호"
      helperText="할당 처리기 노드 번호"
      labelFor="input-name">
      <InputGroup id="input-name" placeholder="번호" value={name}
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

export default observer(AddJobPage);
