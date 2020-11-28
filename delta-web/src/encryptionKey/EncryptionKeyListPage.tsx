import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container } from '../core/Container';
import { Loading } from '../core/Loading';
import EncryptionKeyStore from './store';

interface Props {
  encryptionKey?: EncryptionKeyStore
}

interface State {
}

@inject('encryptionKey')
@observer
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
    return <Container>
      <h2>암호화 키</h2>
      <div>{encryptionKeys.length}개</div>
    </Container>;
  }
}

export default EncryptionKeysPage;
