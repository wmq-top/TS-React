import React from 'react';
import './index.less';

interface BtnProps {
  text?: string;
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'cancel' | 'link';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  block?: boolean;
  shape?: 'default' | 'fillet' | 'round';
  ghost?: boolean;
  size?: 'minimum' | 'small' | 'default' | 'large';
}

const Button: React.FC<BtnProps> = (props: BtnProps) => {
  const {text, type, disabled, block, ghost, size, onClick, shape} = props;
  return (
    <button
      data-size={size || 'default'}
      data-type={!disabled && (type || 'primary')}
      data-ghost={!disabled && ghost}
      data-shape={shape || 'default'}
      onClick={onClick}
      disabled={disabled}
      style={{
        display: block ? 'block' : 'inline-block',
      }}
    >
      {text || 'button'}
    </button>
  );
};
export default Button;
