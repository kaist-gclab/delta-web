import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import App from './App';
import './index.scss';
import { AppContainer } from './container';
import AssetStore from './asset/store';
import EncryptionKeyStore from './encryptionKey/store';

const browserHistory = createBrowserHistory();

const container = AppContainer;

const routing = new RouterStore();
const asset = container.get(AssetStore);
const encryptionKey = container.get(EncryptionKeyStore);

const stores = {
  routing,
  asset,
  encryptionKey,
};

const history = syncHistoryWithStore(browserHistory, routing);

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
