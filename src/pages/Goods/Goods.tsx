import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { getGoodsReq } from 'store/goods/goods';

interface IProps {
  getGoodsReq: (T) => {},
  match: any
}

const Goods: React.SFC<IProps> = ({
  getGoodsReq,
  match
}) => {
  useEffect(() => {
    getGoodsReq({
      itemId: match.params.itemId
    })
  })
  return <div>Goods</div>
}

export default connect((state: any) => ({
  goods: state.goods,
}), {
  getGoodsReq
})(Goods);
