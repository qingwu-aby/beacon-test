import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'components/common/Modal'
import style from './style.module.scss'

const prefixCls = 'mall-common-toast';

export interface IProps {
  unMount?: () => void;
  duration?: number;
  message: string;
  iconCls?: string;
}

export interface IState {
  isShow: boolean;
}

export class Toast extends React.PureComponent<IProps, IState> {
  node: HTMLDivElement = null;
  timeout: NodeJS.Timeout | null = null;
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    }
    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node);
    this.timeout = null;
  }

  closeToast = () => {
    const { duration } = this.props;
    this.timeout = setTimeout(() => {
      this.setState({
        isShow: false
      })
    }, (duration || 0) * 1000)
  }

  componentDidMount() {
    this.setState({
      isShow: true
    })
    this.closeToast();
  }

  render() {
    const {
      message,
      unMount,
      iconCls
    } = this.props;

    const { isShow } = this.state;
    return isShow && ReactDOM.createPortal(
      <Modal
        unMount={unMount}
        enteringClass={style[`${prefixCls}-enter`] || ''}
        leavingClass={style[`${prefixCls}-leave`] || ''}
      >
        <div className={style[prefixCls]}>
          {iconCls && <i className={`${style[`${prefixCls}-icon`]} iconfont ${iconCls}`} />}
          <div className={style[`${prefixCls}-msg`]}>{message}</div>
        </div>
      </Modal>,
      this.node
    )
  }

  componentWillUnmount() {
    this.node && window.document.body.removeChild(this.node);
    this.timeout && clearTimeout(this.timeout)
  }
}

const showToast = opts => {
  const node = document.createElement('div')
  document.body.appendChild(node)
  const unMount = () => window.document.body.removeChild(node);

  return new Promise(_ => {
    ReactDOM.render(<Toast {...opts} unMount={unMount}/>, node)
  });
}

export {
  showToast as default
}
