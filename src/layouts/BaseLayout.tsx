import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import Login from 'pages/Login';
import Goods from 'pages/Goods';

const BaseLayout: React.SFC = () => <Switch>
    <Route path='/home' component={MainLayout}/>
    <Route
      path='/login'
      exact
      component={Login}
    />
    <Route
      path='/goods'
      exact
      component={Goods}
    />
    <Redirect
      exact
      from='/'
      to='/home'
    />
</Switch>

export default BaseLayout;
