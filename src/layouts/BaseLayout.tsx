import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import Loading from 'components/Loading';
const Login = lazy(() => import('pages/Login'));
const Goods = lazy(() => import('pages/Goods'));

const BaseLayout: React.SFC = () => <Suspense fallback={<Loading />}>
  <Switch>
    <Route path='/home' component={MainLayout}/>
    <Route
      path='/login'
      exact
      component={Login}
    />
    <Route
      path='/goods/:itemId'
      exact
      component={Goods}
    />
    <Redirect
      exact
      from='/'
      to='/home'
    />
  </Switch>
</Suspense>

export default BaseLayout;
