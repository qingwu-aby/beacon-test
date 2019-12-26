import React from 'react';

import style from './style.module.scss';

const prefixCls = 'mall-goods-detail';

interface IProps {
  detailInfo: {
    goodsName: string;
    detailImgList: [];
  };
}

const Detail: React.FC<IProps> = ({
  detailInfo
}) => {
  const { goodsName, detailImgList } = detailInfo;
  return <section className={style[prefixCls]}>
    <div className={style[`${prefixCls}-title`]}>
      <div className={style[`${prefixCls}-headline`]}>商品详情</div>
      <div className={style[`${prefixCls}-name`]}>{`"${goodsName}"`}</div>
    </div>
    <div className={style[`${prefixCls}-info`]}>
      {
        detailImgList.map((item, index) => <img
          className={style[`${prefixCls}-img`]}
          key={index}
          src={item}
        />)
      }
    </div>
  </section>
}

export default Detail;
