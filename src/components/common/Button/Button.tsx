import React from 'react';

interface IProps {
  children: string;
}
const Button: React.SFC<IProps> = ({
  children
}) => {
  return <button>{children}</button>
}

export default Button;