import React from 'react';
import './index.less';

interface BtnProps {
  text?: string;
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'cancel' | 'link';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  block?: boolean;
  shape?: 'default' | 'circle' | 'round';
  ghost?: boolean;
  size?: string;
}

const Button: React.FC<BtnProps> = (props: BtnProps) => {
  const {text, onClick, type, disabled, block, ghost} = props;
  return (
    <button
      data-type={!disabled && type}
      data-ghost={!disabled && ghost}
      onClick={onClick}
      disabled={disabled}
      style={{
        display: block ? 'block' : 'inline-block',
      }}
    >
      {text}
    </button>
  );
};
export default Button;
