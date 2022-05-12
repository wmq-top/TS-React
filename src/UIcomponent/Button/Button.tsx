import React from 'react';
import './index.less';

interface BtnProps {
  children?: React.ReactNode;
  className?: string;
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'cancel' | 'link';
  disabled?: boolean;
}

const Button: React.FC<{props: BtnProps}> = ({props}) => {
  console.log(props);
  const {text, className, onClick, type, disabled, ...otherProps} = props;
  return (
    <button
      className={className}
      data-type={type}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {text}
    </button>
  );
};
export default Button;
