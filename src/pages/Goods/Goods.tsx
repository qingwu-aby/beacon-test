import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';

import Slider from './Slider';
import Description from './Description';
import Summary from './Summary';
import Comments from './Comments';
import MallInfo from './MallInfo';
import Detail from './Detail';
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
  // const descKey = {
  //   itemName: goods.itemName,
  // }
  console.log(goods);
  return <Suspense fallback={<Loading />}>
    {goods.headImgList && <Slider
      imgList={goods.headImgList}
    />}
    <Description
      
    />
    <Summary />
    <Comments />
    <MallInfo />
    <Detail />
  </Suspense>
}

export default connect((state: any) => ({
  goods: state.goods.entities,
}), {
  getGoodsReq
})(Goods);
