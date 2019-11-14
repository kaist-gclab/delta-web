import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container } from '../core/Container';
import { Loading } from '../core/Loading';
import AssetStore from './store';

interface Props {
  asset?: AssetStore
}

interface State {
}

@inject('asset')
@observer
class AssetsPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { text: '' };
  }
  componentDidMount() {
    this.props.asset!.fetchAssets();
  }
  render() {
    const assets = this.props.asset!.assets;
    if (!assets) {
      return <Loading />;
    }
    return <Container>
      <h2>애셋 목록</h2>
      {assets.map(a => <p key={a.id}>{a.content}</p>)}
    </Container>;
  }
}

export default AssetsPage;
