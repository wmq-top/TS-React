import React, {useEffect, useState} from 'react';
import gethashcode from '../../GlobalUtil/getHash';
import './index.less';

interface BtnProps {
  text?: string;
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'cancel' | 'link';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  shape?: 'default' | 'fillet' | 'round';
  ghost?: boolean;
  size?: 'minimum' | 'small' | 'default' | 'large';
  style?: React.CSSProperties;
}

const Button: React.FC<BtnProps> = (props: BtnProps) => {
  const {text, type, disabled, ghost, size, onClick, shape, style} = props;
  return (
    <button
      data-size={size || 'default'}
      data-type={!disabled && (type || 'primary')}
      data-ghost={!disabled && ghost}
      data-shape={shape || 'default'}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text || 'button'}
    </button>
  );
};

interface DazzleAnimation {
  active?: boolean;
  spreed?: boolean;
  cycle?: 'along' | 'inverse' | 'none';
}
interface DazzleBtnProps {
  id: string;
  text?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  shape?: 'default' | 'fillet' | 'round';
  size?: 'minimum' | 'small' | 'default' | 'large';
  style?: React.CSSProperties;
  animation?: DazzleAnimation;
  from?: String;
  to?: String;
}

export const DazzleButton: React.FC<DazzleBtnProps & DazzleAnimation> = (
  props: DazzleBtnProps & DazzleAnimation
) => {
  const {id, text, disabled, size, onClick, shape, style, animation, from, to} =
    props;
  const [hashTag, setHashTag]: [string, Function] = useState('');

  useEffect(() => {
    setHashTag(gethashcode());
    return () => {};
  }, []);

  return (
    <>
      <button
        id={id + hashTag}
        data-size={size || 'default'}
        data-shape={shape || 'default'}
        onClick={onClick}
        disabled={disabled}
        style={style}
      >
        {text || 'button'}
      </button>
      <style type="text/css">{`
      #${id + hashTag} {
        background-image: repeating-linear-gradient(45deg,rgba(0,0,0,1),rgba(161, 161, 161, 1) 100% 100%);
        background-size: 100%;
        transition: all 0.3s ease-in-out;
      }
      #${id + hashTag}:hover {
        background-size: 600%;
        box-shadow: 0 0 40px 5px rgba(255,255,255,0.5) inset;
      }
      #${id + hashTag}:focus {
        background-size: 600%;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      }
      `}</style>
    </>
  );
};

export default Button;
