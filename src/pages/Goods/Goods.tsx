import React, { useEffect } from 'react';
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
  goodsDetailSelector,
  goodsSliderSelector
} from 'selectors/goods'

const prefixCls = 'mall-goods';

interface IProps {
  getGoodsReq: (T) => {};
  match: any;
  sliderData: {
    headImgList: [];
  };
  goodsInfo: {
    goodsName: string;
    itemId: string;
    marketPrice: number;
    price: number;
    saleAmout: number;
  };
  detailInfo: {
    goodsName: string;
    detailImgList: [];
  };
  isLoading: boolean;
}

const Goods: React.SFC<IProps> = ({
  getGoodsReq,
  match,
  sliderData,
  goodsInfo,
  detailInfo,
  isLoading
}) => {
  useEffect(() => {
    getGoodsReq({
      itemId: match.params.itemId
    })
  }, [getGoodsReq, match])
  // const descKey = {
  //   itemName: goods.itemName,
  // }
  return <main className={prefixCls}>
    {
      !isLoading ? <React.Fragment>
        { sliderData && <Slider
          imgList={sliderData.headImgList}
        />}
        <Description goodsInfo={goodsInfo} />
        <Summary />
        <Comments />
        <MallInfo />
        <Detail detailInfo={detailInfo}/>
      </React.Fragment> : <Loading />
    }
  </main>
}

export default connect((state: any) => ({
  sliderData: goodsSliderSelector(state),
  goodsInfo: goodsInfoSelector(state),
  detailInfo: goodsDetailSelector(state),
  isLoading: state.goods.isLoading
}), {
  getGoodsReq
})(Goods);
