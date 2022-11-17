import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { configure } from './config/context';
import fetcher from './core/fetcher';
import Layout from './core/Layout';

function App() {
  return <SWRConfig value={{ fetcher }}>
    <Router>
      <Layout />
    </Router>
  </SWRConfig>;
}

export default configure(App);
