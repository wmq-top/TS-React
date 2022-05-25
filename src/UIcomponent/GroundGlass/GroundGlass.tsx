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
                background: `url(${item[0]}) no-repeat`,
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
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default GroudGlass;
