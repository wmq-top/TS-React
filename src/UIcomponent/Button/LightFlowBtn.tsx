import React, {useEffect, useState} from 'react';
import gethashcode from '../../GlobalUtil/getHash';
import './index.less';

interface BtnProps {
  className?: string;
  text?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'minimum' | 'small' | 'default' | 'large';
  style?: React.CSSProperties;
}
interface LightFlowProps {
  id?: string;
  speed?: number;
  staticColor?: string;
  lightColor?: string;
}
const LightFlowButton: React.FC<BtnProps & LightFlowProps> = (
  props: BtnProps & LightFlowProps
) => {
  const {
    id,
    className,
    text,
    disabled,
    size,
    onClick,
    style,
    speed,
    staticColor,
    lightColor,
  } = props;
  const [hashTag, setHashTag]: [string, Function] = useState('');
  useEffect(() => {
    setHashTag(gethashcode());
    return () => {};
  }, []);
  return (
    <button
      className={className}
      id={id + hashTag}
      data-size={size || 'default'}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
      <style>{`
        #${id + hashTag} {
          position: relative;
          display: inline-block;
          color: ${lightColor || '#2196f3'};
          overflow: hidden;
          background-color: ${staticColor || 'rgb(239, 239, 239)'};
        }
        #${id + hashTag}:hover {
          color: #fff;
          background-color: ${lightColor || '#2196f3'};
          box-shadow: 0 0 10px ${lightColor || '#2196f3'}, 0 0 40px ${
        lightColor || '#2196f3'
      }, 0 0 80px ${lightColor || '#2196f3'};
          transition-delay: ${speed || 1}s;
        }
        #${id + hashTag}:focus {
          color: #fff;
          background-color: ${lightColor || '#2196f3'};
          box-shadow: 0 0 10px ${lightColor || '#2196f3'}, 0 0 40px ${
        lightColor || '#2196f3'
      }, 0 0 80px ${lightColor || '#2196f3'};
          transition-delay: 0s;
        }
        #${id + hashTag} span {
          position: absolute;
          display: block;
        }
        #${id + hashTag} span:nth-child(1) {
          top: 0;
          left: -100%;
          width: 100%;
          height: 3px;
          background:linear-gradient(90deg, transparent, ${
            lightColor || '#2196f3'
          });
        }
        #${id + hashTag}:hover span:nth-child(1) {
          left: 100%;
          transition: ${speed || 1}s;
        }
        #${id + hashTag} span:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 3px;
          background:linear-gradient(270deg, transparent, ${
            lightColor || '#2196f3'
          });
        }
        #${id + hashTag}:hover span:nth-child(3) {
          right: 100%;
          transition:  ${speed || 1}s;
          transition-delay: ${(speed || 1) * 0.5}s;
        }
        #${id + hashTag} span:nth-child(2) {
          top: -100%;
          right: 0%;
          width: 3px;
          height: 100%;
          background:linear-gradient(180deg, transparent, ${
            lightColor || '#2196f3'
          });
        }
        #${id + hashTag}:hover span:nth-child(2) {
          top: 100%;
          transition:  ${speed || 1}s;
          transition-delay: ${(speed || 1) * 0.25}s;
        }
        #${id + hashTag} span:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 3px;
          height: 100%;
          background:linear-gradient(360deg, transparent, ${
            lightColor || '#2196f3'
          });
        }
        #${id + hashTag}:hover span:nth-child(4) {
          bottom: 100%;
          transition: ${speed || 1}s;
          transition-delay: ${(speed || 1) * 0.75}s;
        }
        `}</style>
    </button>
  );
};

export default LightFlowButton;
