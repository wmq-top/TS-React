import React, {useState, useEffect} from 'react';
import gethashcode from '../../GlobalUtil/getHash';

interface LoadingProps {
  className?: string;
  shape?: 'line' | 'circle';
  color?: string;
  speed?: number;
  contentColor?: string; // calc ? or input TODO
  style?: React.CSSProperties; // height unexcept %
}
const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
  const {shape, color, speed, style, className, contentColor} = props;
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
      ) : null}
    </div>
  );
};

export default Loading;
