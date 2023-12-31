import { Button, Classes, Dialog, FormGroup, InputGroup } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { FormEvent, useContext, useState } from 'react';
import { EncryptionKeyContext } from '../config/context';
import Container from '../core/Container';
import PageHeader from '../core/PageHeader';
import { CreateEncryptionKeyResponse } from './types';

function AddEncryptionKeyPage() {
  const store = useContext(EncryptionKeyContext);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [okDialogOpen, setOkDialogOpen] = useState(false);
  const openOkDialog = () => setOkDialogOpen(true);
  const openErrorDialog = () => setErrorDialogOpen(true);
  const closeOkDialog = () => setOkDialogOpen(false);
  const closeErrorDialog = () => setErrorDialogOpen(false);

  const submit = async () => {
    try {
      const response: CreateEncryptionKeyResponse = await store.create({ name }) as any;
      setValue(response.value);
      openOkDialog();
    } catch {
      openErrorDialog();
    }
  };

  return <Container reducedTopPadding>
    <PageHeader>암호화 키 추가</PageHeader>
    <FormGroup
      label="이름"
      labelInfo="(필수)"
      helperText="암호화 키 이름"
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
        <p>추가된 암호화 키 내용입니다.</p>
        <pre>{value}</pre>
        <p>지금 한 번만 확인할 수 있습니다. 이 메시지를 닫고 나면 다시는 확인할 수 없습니다.</p>
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

export default observer(AddEncryptionKeyPage);
