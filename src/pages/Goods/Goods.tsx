import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router-dom';

import Slider from './Slider';
import Description from './Description';
import Summary from './Summary';
import Comments from './Comments';
import MallInfo from './MallInfo';
import Detail from './Detail';
import PlaceOrder from './PlaceOrder';
import Loading from 'components/Loading';
import { getGoodsReq } from 'store/goods/goods';

import {
  goodsInfoSelector,
  goodsDetailSelector,
  goodsSliderSelector
} from 'selectors/goods';
import style from './style.module.scss';

const prefixCls = 'mall-goods';

interface IProps {
  getGoodsReq: (T) => {};
  match: {
    params: {
      itemId: string | number
    }
  };
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
  loading: boolean;
}

const Goods: React.SFC<IProps & RouteProps> = ({
  getGoodsReq,
  match,
  sliderData,
  goodsInfo,
  detailInfo,
  loading
}) => {
  useEffect(() => {
    getGoodsReq({
      itemId: match.params.itemId
    })
  }, [getGoodsReq, match])
  return <main className={style[prefixCls]}>
    <div className={style[`${prefixCls}-wrapper`]}>
      {
        !loading ? <React.Fragment>
          {/* { sliderData && <Slider
            imgList={sliderData.headImgList}
          />} */}
          <Description goodsInfo={goodsInfo} />
          <Summary />
          <Comments />
          <MallInfo />
          <Detail detailInfo={detailInfo}/>
        </React.Fragment> : <Loading />
      }
    </div>
    <PlaceOrder />
  </main>
}

export default connect((state: any) => ({
  sliderData: goodsSliderSelector(state),
  goodsInfo: goodsInfoSelector(state),
  detailInfo: goodsDetailSelector(state),
  loading: state.goods.loading
}), {
  getGoodsReq
})(Goods);
