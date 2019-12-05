import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TabBar from 'components/TabBar';
import style from './app.module.scss';

const App: React.FC = () => <div className={style.app}>
  <Switch>
    <Route
      path="/"
      component={TabBar}
    />
  </Switch>
</div>

export default App;
