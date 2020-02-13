import React from 'react';

import style from './style.module.scss';

const prefixCls = 'mall-goods-place-order';

const PlaceOrder: React.FC = () => {
  return <div className={style[prefixCls]}>
      <div className={style[`${prefixCls}-tip`]}>kefu</div>
      <div className={style[`${prefixCls}-cart`]}>加入购物车</div>
      <div className={style[`${prefixCls}-buy`]}>立即购买</div>
  </div>
}

export default PlaceOrder;
