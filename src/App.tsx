import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import style from './app.module.scss';
import BaseLayout from 'layouts/BaseLayout';

const history = createBrowserHistory();

const App: React.FC = () => <div className={style.app}>
  <Router history={history}>
    <BaseLayout />
  </Router>
</div>

export default App;
