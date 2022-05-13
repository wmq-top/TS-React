import React, {useEffect, useRef, useState} from 'react';
import gethashcode from '../../GlobalUtil/getHash';
import {DazzleButton} from '../Button/Button';

interface CDRotateProps {
  image: string;
  size?: string;
  speed?: number;
  withControl?: boolean;
  posStyle?: React.CSSProperties;
  controlStyle?: React.CSSProperties;
}

const CDRotate: React.FC<CDRotateProps> = (props: CDRotateProps) => {
  const {image, size, speed, withControl, controlStyle} = props;
  const [isActive, setIsActive]: [boolean, Function] = useState(true);
  const [hashTag, sethashTag]: [string, Function] = useState('');
  useEffect(() => {
    sethashTag(gethashcode());
    return () => {};
  }, []);
  return (
    <div style={{paddingTop: size || '200px'}}>
      <div className={'CD-container' + hashTag}>
        <div className={'CD-pic' + hashTag}></div>
        <style type="text/css">{`
        .CD-container${hashTag} {
            width: ${size || '200px'};
            margin: auto;
        }
        .CD-container${hashTag} {
            animation: rotate ${
              speed ? String(360 / speed) : 5
            }s linear infinite;
            animation-play-state: ${isActive ? 'running' : 'paused'};
        }
        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .CD-pic${hashTag} {
            position: relative;
            height: ${size || '200px'};
            border-radius: 50%;
            background: url(${image}) no-repeat center;
            background-size: 100% 100%;
        }
        .CD-pic${hashTag}::after {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: inherit;
            border-radius: 50%;
            transform: scale(.95);
            filter: blur(0px) brightness(80%) opacity(0.6);
            z-index: -1;
        }
      `}</style>
      </div>
      {withControl && (
        <DazzleButton
          id="dazzle-btn"
          from="rgba(0, 0, 0, 1)"
          to="rgba(125,125,125,1)"
          shape="fillet"
          text={isActive ? '暂停' : '继续'}
          style={controlStyle}
          onClick={() => {
            setIsActive(!isActive);
          }}
        />
      )}
    </div>
  );
};

export default CDRotate;
