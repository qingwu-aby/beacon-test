import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';

import Slider from './Slider';
import Loading from 'components/Loading';
import { getGoodsReq } from 'store/goods/goods';

const prefixCls = 'mall-goods';

interface IProps {
  getGoodsReq: (T) => {};
  match: any;
  goods: any;
}

const Goods: React.SFC<IProps> = ({
  getGoodsReq,
  match,
  goods
}) => {
  useEffect(() => {
    getGoodsReq({
      itemId: match.params.itemId
    })
  }, [])
  return <Suspense fallback={<Loading />}>
    {goods.data && <Slider
      slideCls={`${prefixCls}-slider`}
      imgList={goods.data.head_img_list}
    />}
  </Suspense>
}

export default connect((state: any) => ({
  goods: state[1].goods,
}), {
  getGoodsReq
})(Goods);
