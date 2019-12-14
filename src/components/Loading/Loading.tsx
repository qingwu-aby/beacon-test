import React from 'react';

import style from './style.module.scss';

const prefixCls = 'mall-loading';


const Loading: React.FC = () => <div className={style[prefixCls]}>
  <div className={style[`${prefixCls}-wrapper`]}>
    <div className={style[`${prefixCls}-loading`]} />
  </div>
</div>

export default Loading;
