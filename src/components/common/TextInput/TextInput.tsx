import React from 'react';

import './style.module.scss';
interface IProps {
  type: string;
  placeholder: string;
  onChange?: () => {};
  pattern: string;
  clsName?: string;
  title?: string;
}

const TextInput: React.SFC<IProps> = ({
  type,
  placeholder,
  onChange,
  pattern,
  clsName,
  title
}) => {
  return <input
    type={type}
    className={clsName}
    placeholder={placeholder}
    onChange={onChange}
    pattern={pattern}
    title={title}
  />
}
export default TextInput;
