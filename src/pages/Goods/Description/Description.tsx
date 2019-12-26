import React from 'react';
import style from './style.module.scss'

interface IProps {
  goodsInfo: {
    goodsName: string;
    itemId: string;
    marketPrice: number;
    price: number;
    saleAmout: number;
  }
}

const prefixCls = 'mall-goods-desc'

const Description: React.FC<IProps> = ({
  goodsInfo
}) => {
  const {
    goodsName,
    itemId,
    marketPrice,
    price,
    saleAmout
  } = goodsInfo;
  return <section className={style[prefixCls]}>
    <div className={style[`${prefixCls}-cost`]}>
      <div className={style[`${prefixCls}-price`]}>
        <span className={style[`${prefixCls}-mow`]}>¥</span>
        <span className={style[`${prefixCls}-sell`]}>{price}</span>
        <span className={style[`${prefixCls}-tag`]}>直邮免税</span>
      </div>
      <div className={style[`${prefixCls}-market`]}>
        <span className={style[`${prefixCls}-slice`]}>¥{marketPrice}</span>
      </div>
    </div>
    <div className={style[`${prefixCls}-intro`]}>
      <div className={style[`${prefixCls}-name`]}>
        {goodsName}
      </div>
    </div>
    <div className={style[`${prefixCls}-tips`]}>
      <span>满88元包邮</span>
      <span>月销量{saleAmout}件</span>
    </div>
  </section>
}

export default Description;
