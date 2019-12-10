import React from 'react';
import { NavLink } from 'react-router-dom';
import Main from 'components/Main'
import { menuList } from 'constants/menu'
import style from './style.module.scss'
const prefixCls = 'mall-tab';

const TabBar: React.SFC<{}> = () => {
  return <div className={style[prefixCls]}>
    <Main />
    <div className={style[`${prefixCls}-wrapper`]}>
      {
        menuList.map((item, index: number) => <NavLink
          key={`tab-${index}`}
          to={item.link}
          exact
          className={style[`${prefixCls}-link`]}
          activeClassName={style[`${prefixCls}-active`]}
        >
          <i className={`iconfont ${item.link === window.location.pathname ? item.activeIcon : item.icon}`} />
          <span>{item.label}</span>
        </NavLink>)
      }
    </div>
  </div>
}

export default TabBar;
