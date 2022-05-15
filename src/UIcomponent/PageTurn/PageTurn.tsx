import React, {useState, useEffect} from 'react';
import gethashcode from '../../GlobalUtil/getHash';

import './index.less';
interface PageTurnProps {
  className?: string;
  mode?: string;
  speed?: number;
  style?: React.CSSProperties;
  total: number;
  pageSize?: number;
  defultCurrent?: number;
  size?: 'default' | 'small' | 'large';
  content?: React.ReactNode;
  widthControl?: boolean;
  overHidden?: number;
}
const PageTurn: React.FC<PageTurnProps> = (props: PageTurnProps) => {
  const {
    className,
    mode,
    speed,
    style,
    total,
    pageSize,
    defultCurrent,
    size,
    widthControl,
    overHidden,
  } = props;
  const [hashTag, setHashTag]: [string, Function] = useState('');
  const [pageConfig, setPageConfig]: [Array<number>, Function] = useState([]);
  const [current, setCurrent]: [number, Function] = useState(
    defultCurrent || 1
  );
  const calcWidth = (
    num: number,
    size: string,
    widthControl: boolean
  ): number => {
    const width = 0;
    const getCount = (
      num: number,
      overHidden: number,
      widthControl: boolean
    ): number => {
      if (num >= overHidden) {
        return widthControl ? overHidden + 3 : overHidden;
      } else {
        return widthControl ? num + 3 : num;
      }
    };
    switch (size) {
      case 'default':
        return getCount(num, overHidden || 5, widthControl) * 45;
      case 'small':
        return getCount(num, overHidden || 5, widthControl) * 38;
      case 'large':
        return getCount(num, overHidden || 5, widthControl) * 52;
      default:
        return 371;
    }
  };
  useEffect(() => {
    const PageConfig = new Array(Math.ceil(total / (pageSize || 20)))
      .fill(0)
      .map((_, index) => {
        return index + 1;
      });
    setPageConfig(PageConfig);
  }, []);
  return (
    <div
      className={`Sp_Pagination ${className}`}
      data-size={size || 'default'}
      style={{
        width: calcWidth(
          pageConfig.length,
          size || 'default',
          widthControl || false
        ),
      }}
    >
      {widthControl && (
        <div
          className={current === 1 ? 'spControlDis' : 'spControBtn'}
          onClick={() => {
            if (current === 1) {
              return;
            } else {
              setCurrent(current - 1);
            }
          }}
        >
          {'<'}
        </div>
      )}
      {pageConfig.map(item => {
        if (item <= (overHidden || 5)) {
          return (
            <div
              className={`Sp-page-${item}`}
              key={item}
              data-sp-page-active={current === item}
              onClick={() => {
                setCurrent(item);
              }}
            >
              {item}
            </div>
          );
        }
        return null;
      })}
      {(overHidden || 5) < pageConfig.length && <div>...</div>}
      {widthControl && (
        <div
          className={
            current === pageConfig.length ? 'spControlDis' : 'spControBtn'
          }
          onClick={() => {
            if (current === pageConfig.length) {
              return;
            } else {
              setCurrent(current + 1);
            }
          }}
        >
          {'>'}
        </div>
      )}
    </div>
  );
};

export default PageTurn;
