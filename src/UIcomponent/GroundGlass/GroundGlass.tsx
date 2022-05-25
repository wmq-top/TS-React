import React, {useEffect, useState} from 'react';
import './index.less';
import * as typeCheck from '../../GlobalUtil/typeCheck';

interface groupConfig {
  groupID: number;
  src: string;
}
interface GroundGlassProps {
  id?: string;
  className?: string;
  groups?: Array<groupConfig>;
  style?: React.CSSProperties;
  blur?: number;
  col?: number;
  height?: number;
}
const GroudGlass: React.FC<GroundGlassProps> = (props: GroundGlassProps) => {
  const {className, style, blur, id, groups, col, height} = props;
  const [groupsData, setgroupsData] = useState<Array<Array<string>>>([]);
  const [colPercentArr, setColPercentArr] = useState<Array<string>>([]);
  const [active, setacticve] = useState<number>(-1);
  useEffect(() => {
    const _groupArr: Array<Array<string>> = [];
    groups?.forEach(item => {
      const [_flag, string] = typeCheck.positiveIntegerCheck(
        'groupID',
        item.groupID
      );
      if (!_flag) {
        console.error(string);
        return;
      }
      if (_groupArr[item.groupID - 1] !== undefined) {
        _groupArr[item.groupID - 1].push(item.src);
      } else {
        _groupArr[item.groupID - 1] = [item.src];
      }
      setgroupsData(_groupArr);
    });
    while (_groupArr.length % (col || 4) !== 0) {
      _groupArr.push(['']);
    }
  }, []);
  useEffect(() => {
    const _posArr = new Array(col || 4).fill('');
    _posArr.forEach((_, i, arr) => {
      if (i === 0) {
        arr[i] = '0%';
      } else {
        arr[i] = `${(100 / (col || 4)) * i - 1}% + 1rem`;
      }
    });
    setColPercentArr(_posArr);
  }, [col]);
  const getOpicity = (index: number): string => {
    if (active === -1) {
      return 'fadein';
    } else if (active === index) {
      return 'active';
    } else {
      return 'fadeout';
    }
  };
  return (
    <div className={`GroudGlassContent ${className}`} style={style}>
      <div
        className="GroundGlassFilter"
        tabIndex={1}
        style={{display: active === -1 ? 'flex' : 'block'}}
      >
        {groupsData.map((item, index) => {
          return (
            <div
              className={`pickList pickList-${index} ${getOpicity(index)}`}
              style={{
                width:
                  active === index
                    ? 'calc(100% - 2rem)'
                    : `${(col && 100 / col - 1) || 24}%`,
                height: `${height || 200}px`,
                // background: `url(${item[0]}) no-repeat`,
                cursor: `${item[0] === '' ? 'default' : 'pointer'}`,
                backgroundSize: 'cover',
              }}
              key={`${item[0]}-${index}`}
              onClick={() => {
                if (item[0] === '') {
                  return;
                }
                if (active === index) {
                  setacticve(-1);
                } else {
                  setacticve(index);
                }
              }}
            >
              {item[0] !== '' &&
                item.map((ele, nums) => {
                  return (
                    <img
                      src={ele}
                      style={{
                        display: 'block',
                        borderRadius: '10px',
                        width: `${active === -1 ? 100 : 100 / (col || 4) - 1}%`,
                        height: `${height || 200}px`,
                        position: 'absolute',
                        transitionProperty: 'left,top',
                        transitionDuration: '0.5s,0.5s',
                        transitionTimingFunction: 'ease-in-out,ease-in-out',
                        transitionDelay:
                          '' + nums * 0.01 + 's' + ',' + nums * 0.01 + 's',
                        left: `${
                          active !== index
                            ? '0'
                            : 'calc(' + colPercentArr[nums % (col || 4)] + ')'
                        }`,
                        top: `${
                          active !== index
                            ? '0'
                            : 'calc(' +
                              Math.floor(nums / (col || 4)) * (height || 200) +
                              'px' +
                              ' ' +
                              '+' +
                              ' ' +
                              Math.floor(nums / (col || 4)) * 1 +
                              'rem)'
                        }`,
                      }}
                      className={`pic-item ${
                        active === index ? 'activepic' : ''
                      }}`}
                      data-col={1}
                      data-row={1}
                    />
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroudGlass;
