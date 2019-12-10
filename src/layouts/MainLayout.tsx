import React from 'react';
import { Route } from 'react-router-dom';
import Main from 'components/Main';
import HomeRouter from 'routes/HomeRouter';

const MainLayout: React.SFC = () => <div>
  <Main />
  <Route component={HomeRouter} />
</div>

export default MainLayout;
