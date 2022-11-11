import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { configure } from './config/context';
import fetcher from './core/fetcher';
import Layout from './core/Layout';

const App: React.FC = () => {
  return <SWRConfig value={{ fetcher }}>
    <Router>
      <Layout />
    </Router>
  </SWRConfig>;
};

export default configure(App);
