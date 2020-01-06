/**
 * @desc 竪排列表item
 */

import React from 'react';
import style from './style.module.scss';

const prefixCls = 'mall-common-item';

const VerticalItem: React.FC = () => {
  return <div className={style[`${prefixCls}-vertical`]}>VerticalItem</div>
}

export default VerticalItem;
