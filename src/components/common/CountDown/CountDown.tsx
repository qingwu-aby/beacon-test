import React from 'react';
import useCountDown from './useCountDown';

import style from './style.module.scss';
const prefixCls = 'mall-common-countdown';

interface IProps {
  smsVerifyReq: () => {}
}

const CountDown: React.SFC<IProps> = ({
  smsVerifyReq
}) => {
  const {
    timerStart,
    isLoading,
    totalSecond,
    btnText
  } = useCountDown({
    btnText: '获取验证码',
    isLoading: false,
    totalSecond: 60,
    smsVerifyReq
  });
  return <button
    disabled={isLoading}
    onClick={timerStart}
    className={style[prefixCls]}
  >
    {
      !isLoading ? btnText : `${totalSecond}秒后重新获取`
    }
  </button>
}

export default CountDown;
