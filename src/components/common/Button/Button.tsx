import React from 'react';

import style from './style.module.scss';
interface IProps {
  text: string;
}

const prefixCls = 'mall-common-button';
const Button: React.SFC<IProps> = ({
  text
}) => {
  return <button className={style[prefixCls]}>{text}</button>
}

export default Button;