import * as React from 'react';
import { connect } from 'react-redux';

import style from './style.module.scss';

const Login: React.SFC<Login.IAuth> = ({ auth }) => {
  return <div>{auth.code}onclick</div>
}

export default connect((state: State.IStore) => ({
  auth: state.auth,
}))(Login);
