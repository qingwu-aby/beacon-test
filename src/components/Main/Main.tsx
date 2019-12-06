import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home'
import { menuList } from 'constants/menu'
import style from './style.module.scss';

const prefixCls = 'mall-main';

const Main: React.SFC<{}> = () => <div className={style[prefixCls]}>
  <Switch>
    <Route
      exact={true}
      path="/"
      component={Home}
    />
    {
      menuList.map((item, index) => <Route
        path={item.link}
        exact
        key={`main-${index}`}
        component={item.comp}
      />)
    }
  </Switch>
</div>

export default Main;
