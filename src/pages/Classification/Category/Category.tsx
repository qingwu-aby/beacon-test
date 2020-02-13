import React from 'react';
import { NavLink, RouteProps } from 'react-router-dom';

import style from './style.module.scss';

const prefixCls: string = 'mall-classification-category';

interface IProps {
  categoryList: [];
}

const Category: React.FC<IProps & RouteProps> = ({
  categoryList,
  location
}) => {
  console.log('----location', location)
  return <div className={style[prefixCls]}>
    <div className={style[`${prefixCls}-nav`]}>
      {
        categoryList.map((item: any) => <NavLink key={item.id} to={`/home/search/${item.id}`}>
          {item.name}
        </NavLink>)
      }
    </div>
    <div className={style[`${prefixCls}-content`]}>
      ff
    </div>
  </div>
}

export default Category;
