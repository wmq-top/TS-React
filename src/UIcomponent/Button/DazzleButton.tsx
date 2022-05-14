import React, {useEffect, useState} from 'react';
import gethashcode from '../../GlobalUtil/getHash';
import './index.less';

interface BtnProps {
  text?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'minimum' | 'small' | 'default' | 'large';
  style?: React.CSSProperties;
}
interface DazzleAnimation {
  id: string;
  shape?: 'default' | 'fillet';
  animation?: DazzleAnimation;
  from?: String;
  to?: String;
}

interface BtnProps {
  className?: string;
  text?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'minimum' | 'small' | 'default' | 'large';
  style?: React.CSSProperties;
}

export const DazzleButton: React.FC<BtnProps & DazzleAnimation> = (
  props: BtnProps & DazzleAnimation
) => {
  const {
    id,
    className,
    text,
    disabled,
    size,
    onClick,
    shape,
    style,
    animation,
    from,
    to,
  } = props;
  const [hashTag, setHashTag]: [string, Function] = useState('');

  useEffect(() => {
    setHashTag(gethashcode());
    return () => {};
  }, []);

  return (
    <>
      <button
        className={className}
        id={id + hashTag}
        data-size={size || 'default'}
        data-shape={shape || 'default'}
        onClick={onClick}
        disabled={disabled}
        style={style}
      >
        {text || 'button'}
        <style type="text/css">{`
      #${id + hashTag} {
        background-image: repeating-linear-gradient(45deg,${
          from || 'rgba(0, 0, 0, 1)'
        },${to || 'rgba(161, 161, 161, 1)'} 100% 100%);
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
      </button>
    </>
  );
};

export default DazzleButton;
