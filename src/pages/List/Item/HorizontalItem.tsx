/**
 * @desc 橫排列表item
 */

import React from 'react';
import style from './style.module.scss';

const prefixCls = 'mall-common-item';

const HorizontalItem: React.FC = () => {
  return <div className={style[`${prefixCls}-horizontal`]}>HorizontalItem</div>
}

export default HorizontalItem;
