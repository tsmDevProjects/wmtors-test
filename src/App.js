import React from 'react';
import { Router } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/Global';

function App() {
  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
