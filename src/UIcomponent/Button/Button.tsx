import React from 'react';
import './index.less';

interface BtnProps {
  text?: string;
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'cancel' | 'link';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  block?: boolean;
  shape?: 'circle' | 'round';
}

const Button: React.FC<BtnProps> = (props: BtnProps) => {
  console.log(props);
  const {text, onClick, type, disabled, block} = props;
  return (
    <button
      data-type={!disabled && type}
      onClick={onClick}
      disabled={disabled}
      style={{display: block ? 'block' : 'inline-block'}}
    >
      {text}
    </button>
  );
};
export default Button;
