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

import {
  goodsInfoSelector,
  goodsActivitySelector,
  goodsDetailSelector,
  goodsSliderSelector
} from 'selectors/goods'

const prefixCls = 'mall-goods';

interface IProps {
  getGoodsReq: (T) => {};
  match: any;
  sliderData: {
    headImgList: string[];
  };
}

const Goods: React.SFC<IProps> = ({
  getGoodsReq,
  match,
  sliderData
}) => {
  useEffect(() => {
    getGoodsReq({
      itemId: match.params.itemId
    })
  }, [])
  // const descKey = {
  //   itemName: goods.itemName,
  // }
  console.log(sliderData)
  return <Suspense fallback={<Loading />}>
    {sliderData && <Slider
      imgList={sliderData.headImgList}
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
  sliderData: goodsSliderSelector(state),
}), {
  getGoodsReq
})(Goods);
