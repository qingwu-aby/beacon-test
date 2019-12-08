import React from 'react';

interface IProps {
  type: string;
  placeholder: string;
  onChange?: () => {};
  pattern: string;
}
const TextInput: React.SFC<IProps> = ({
  type,
  placeholder,
  onChange,
  pattern
}) => {
  return <input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    pattern={pattern}
  />
}
export default TextInput;
