import React from 'react';
import { inject, observer } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import Layout from './core/Layout';

interface Props {
  routing?: RouterStore,
}

@inject('routing')
@observer
class App extends React.Component<Props> {
  render() {
    return <Layout />;
  }
}

export default App;
