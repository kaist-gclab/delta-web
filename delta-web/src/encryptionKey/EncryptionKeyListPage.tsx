import React from 'react';
import { inject, observer } from 'mobx-react';
import { Loading } from '../core/Loading';
import EncryptionKeyStore from './store';

interface Props {
  encryptionKey?: EncryptionKeyStore
}

interface State {
}

class EncryptionKeysPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { text: '' };
  }
  componentDidMount() {
    this.props.encryptionKey!.fetchAssets();
  }
  render() {
    const encryptionKeys = this.props.encryptionKey!.encryptionKeys;
    if (!encryptionKeys) {
      return <Loading />;
    }
    return <>
      <h2>암호화 키</h2>
      <div>{encryptionKeys.length}개</div>
    </>;
  }
}

const EncryptionKeyListPage: React.FC = () => {
  return <h1>암호화 키 목록</h1>;
};

export default observer(EncryptionKeyListPage);
