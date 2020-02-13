import React from 'react';

import style from './style.module.scss';

const prefixCls: string = 'mall-classification-search';

const Search: React.FC = () => {
  return <div className={style[prefixCls]}>
    <div className={style[`${prefixCls}-index`]}>
      <i className='iconfont icon-sousuo'/>
      <input className={style[`${prefixCls}-input`]} type='text' placeholder='请输入搜索商品'/>
    </div>
  </div>
}

export default Search;
