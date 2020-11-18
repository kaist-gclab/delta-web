import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure } from './config/context';
import Layout from './core/Layout';

const App: React.FC = () => {
  return <Router>
    <Layout />
  </Router>;
};

export default configure(App);
