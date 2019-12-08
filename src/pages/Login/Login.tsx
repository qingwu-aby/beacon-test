import * as React from 'react';
import { connect } from 'react-redux';
import { LOGIN_TIPS } from 'constants/index';
import { TextInput, Button } from 'components/common';

import style from './style.module.scss';

const prefixCls = 'mall-login';
const Login: React.SFC<Login.IAuth> = ({ auth }) => {
  return <div className={style[prefixCls]}>
    <div className={style[`${prefixCls}-wrapper`]}>
      <div className={style[`${prefixCls}-header`]}>
        手机验证码
      </div>
      <div className={style[`${prefixCls}-content`]}>
        <div className={style[`${prefixCls}-form`]}>
          <TextInput pattern="[0-9]" placeholder="请输入手机号" type="text" />
          <TextInput pattern="[0-9]" placeholder="请输入手机验证码" type="text" />
        </div>
      </div>
      <div className={style[`${prefixCls}-footer`]}>

      </div>
    </div>
  </div>
}


export default connect((state: State.IStore) => ({
  auth: state.auth,
}))(Login);
