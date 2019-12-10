import React from 'react';
import { connect } from 'react-redux';
import { LOGIN_TIPS, NUM_REG } from 'constants/index';
import { TextInput, Button, CountDown } from 'components/common';
import { smsVerifyReq } from 'store/auth/auth';
import style from './style.module.scss';

const prefixCls = 'mall-login';
const Login: React.SFC<Login.IAuth> = ({ smsVerifyReq }) => {
  return <div className={style[prefixCls]}>
    <div className={style[`${prefixCls}-wrapper`]}>
      <div className={style[`${prefixCls}-form`]}>
        <div className={style[`${prefixCls}-phone`]}>
          <TextInput
            pattern={NUM_REG}
            placeholder="请输入手机号"
            type="text"
            clsName={style[`${prefixCls}-input`]}
            title="输入正确的手机号码"
          />
          <CountDown smsVerifyReq={smsVerifyReq}/>
        </div>
        <TextInput
          pattern={NUM_REG}
          placeholder="请输入手机验证码"
          type="text"
          clsName={style[`${prefixCls}-input`]}
          title="输入
          数字验证码"
        />
        <Button
          text="登 录"
        />
      </div>
      <div className={style[`${prefixCls}-footer`]}>
        <div className={style[`${prefixCls}-footer-wrapper`]}>
          <span className="iconfont icon-wechat" />
          <p>{LOGIN_TIPS}</p>
        </div>
      </div>
    </div>
  </div>
}


export default connect((state: any) => ({
  auth: state.auth,
}), {
  smsVerifyReq
})(Login);
