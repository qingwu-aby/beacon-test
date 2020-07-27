import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import style from './app.module.scss';
import BaseLayout from 'layouts/BaseLayout';
import Monitor from './utils/beacon';

new Monitor({
  domain: 'http://localhost:3002'
}, () => {}).reportData()


const history = createBrowserHistory();

const App: React.FC = () => <div className={style.app}>
  <Router history={history}>
    <BaseLayout />
  </Router>
</div>

export default App;
