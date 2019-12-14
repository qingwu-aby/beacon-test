import React, { ReactChild } from 'react'
import ReactDOM from 'react-dom'

interface IProps {
  children: ReactChild
}

export default class Portal extends React.PureComponent<IProps> {
  node: HTMLDivElement = null;
  constructor(props) {
    super(props);
    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.node
    )
  }

  componentWillUnmount() {
    this.node && window.document.body.removeChild(this.node);
  }
}
