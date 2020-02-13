import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuList } from 'constants/menu'

import style from './style.module.scss'
const prefixCls = 'mall-tab';

const HomeRouter: React.SFC<{}> = ({}) => <div className={style[prefixCls]}>
  <div className={style[`${prefixCls}-wrapper`]}>
    {
      menuList.map((item, index: number) => <NavLink
        key={`tab-${index}`}
        to={item.link}
        exact={item.exact}
        className={style[`${prefixCls}-link`]}
        activeClassName={style[`${prefixCls}-active`]}
      >
        <i className={`iconfont ${item.link === window.location.pathname ? item.activeIcon : item.icon}`} />
        <span>{item.label}</span>
      </NavLink>)
    }
  </div>
</div>

export default HomeRouter;
