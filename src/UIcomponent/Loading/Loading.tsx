import React, {useState, useEffect} from 'react';
import gethashcode from '../../GlobalUtil/getHash';

interface LoadingProps {
  className?: string;
  shape?: 'line' | 'circle';
  color?: string;
  speed?: number;
  contentColor?: string; // calc ? or input TODO
  style?: React.CSSProperties; // height unexcept %
  cyclesize?: number;
  strenth?: number;
}
const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
  const {
    shape,
    color,
    speed,
    style,
    className,
    contentColor,
    strenth,
    cyclesize,
  } = props;
  const [hashTag, setHashTag]: [string, Function] = useState('');
  const [radius, setRadius]: [string, Function] = useState('10px');
  const getRadius = (str: string) => {
    const reg = /(?<number>[0-9]+)(?<unit>.+)/g; // 只取数字部分?
    for (const item of str.matchAll(reg)) {
      if (item && item.groups && item.groups.unit !== '%') {
        setRadius(Number(item.groups.number) / 2 + item.groups.unit);
      }
    }
    // async ?
  };
  useEffect(() => {
    setHashTag(gethashcode());
    if (style?.height) {
      getRadius(String(style.height || '10px'));
    }
    return () => {};
  }, []);

  return (
    <div>
      {shape === 'line' ? (
        <div className={String(className) + hashTag} style={style}>
          <div className={String(className) + hashTag + 'slider'}></div>
          <style type="text/css">
            {`
            .${String(className) + hashTag} {
                background-color: ${contentColor};
                border-radius: ${radius};
                margin: 10px auto;
                position: relative;
                overflow: hidden;
            }
            .${String(className) + hashTag}slider {
                position: absolute;
                left: -100%;
                height: 100%;
                width: 100%;
                background:linear-gradient(90deg, transparent, ${
                  color || '#2196f3'
                });
                border-radius: ${radius};
                animation: Right infinite ${speed}s ease-in-out;
            }
            @keyframes Right {
                0% {
                    left: -100%;
                }
                100% {
                    left: 0%
                }
            }
        `}
          </style>
        </div>
      ) : (
        <div className={String(className) + hashTag}>
          <div className={String(className) + hashTag + 'shadow'}></div>
          <div className={String(className) + hashTag + 'bottom'}></div>
          <div className={String(className) + hashTag + 'right'}></div>
          <div className={String(className) + hashTag + 'loading'}>
            <div className={String(className) + hashTag + 'cycleleft'}></div>
            <div className={String(className) + hashTag + 'cycleright'}></div>
          </div>
          <style type="text/css">
            {`
                .${String(className) + hashTag} {
                width: ${cyclesize || 50}px;
                height: ${cyclesize || 50}px;
                position: relative;
                background-color: #fff;
                animation: cycle${hashTag} 2s infinite linear;
                }
                @keyframes cycle${hashTag} {
                  0%{
                    transform: rotate(0deg);
                  }
                  100%{
                    transform: rotate(360deg);
                  }
                }
                .${String(className) + hashTag}bottom {
                  width: ${cyclesize || 50}px;
                  height: ${(cyclesize && cyclesize / 2) || 25}px;
                  background-color: #fff;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  z-index: 9;
                }
                .${String(className) + hashTag}right {
                  height: ${cyclesize || 50}px;
                  width: ${(cyclesize && cyclesize / 2) || 25}px;
                  background-color: #fff;
                  position: absolute;
                  right: 0;
                  top: 0;
                  z-index: 9;
                }
                .${String(className) + hashTag}loading {
                  height: ${(cyclesize || 50) - (strenth || 5) * 2}px;
                  width: ${(cyclesize || 50) - (strenth || 5) * 2}px;
                  position: absolute;
                  border-radius: 50%;
                  border: ${strenth || 5}px solid ${color || '#2196f3'};
                  left:0;
                  top: 0;
                }
                .${String(className) + hashTag}shadow {
                  width: ${(cyclesize || 50) - (strenth || 5) * 2}px;
                  height: ${(cyclesize || 50) - (strenth || 5) * 2}px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  border-radius: 50%;
                  border: ${strenth || 5}px solid rgba(165, 165, 255, 0.2);
                  z-index: 99;
                }
                .${String(className) + hashTag}cycleleft{
                  height: ${strenth || 5}px;
                  width: ${strenth || 5}px;
                  top: ${
                    ((cyclesize || 50) - (strenth || 5)) / 2 - (strenth || 5)
                  }px;
                  left: -${strenth || 5}px;
                  position: absolute;
                  background-color: ${color || '#2196f3'};
                  z-index: 99;
                  border-radius: 50%;
                }
                .${String(className) + hashTag}cycleright{
                  height: ${strenth || 5}px;
                  width: ${strenth || 5}px;
                  top: -${strenth || 5}px;
                  left: ${
                    ((cyclesize || 50) - (strenth || 5)) / 2 - (strenth || 5)
                  }px;
                  position: absolute;
                  background-color: ${color || '#2196f3'};
                  z-index: 99;
                  border-radius: 50%;
                }
            `}
          </style>
        </div>
      )}
    </div>
  );
};

export default Loading;
