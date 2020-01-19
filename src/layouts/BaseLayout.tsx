import React, { Suspense } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import MainLayout from 'layouts/MainLayout';
import Loading from 'components/Loading';
import { mainList } from 'constants/menu'

const BaseLayout: React.FC<any> = ({
  location
}) => <TransitionGroup className={'router-wrapper'}>
  <CSSTransition
    timeout={300}
    classNames={'fade'}
    key={location.pathname}
    unmountOnExit={true}
  >
    <Suspense fallback={<Loading />}>
      <Switch location={location}>
        <Route path='/home' component={MainLayout}/>
        {
          mainList.map((item, index) => <Route
            path={item.path}
            exact
            key={index}
            component={item.comp}
          />)
        }
        <Redirect
          exact
          from='/'
          to='/home'
        />
      </Switch>
    </Suspense>
  </CSSTransition>
</TransitionGroup>;

export default withRouter(BaseLayout);
