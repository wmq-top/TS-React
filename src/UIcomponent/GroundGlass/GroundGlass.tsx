import React from 'react';
import './index.less';

interface GroundGlassProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  blur?: number;
}
const GroudGlass: React.FC<GroundGlassProps> = (props: GroundGlassProps) => {
  const {children, className, style, blur} = props;
  const getpic = () => {
    return (
      <div
        className="picbox"
        style={{
          backgroundImage:
            'url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G020114924%2F200G0114924-15-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655477655&t=e4847d76c3dca40182c301fd8ab3bd0a")',
        }}
      />
    );
  };
  return (
    <div className={`GroudGlassContent ${className}`} style={style}>
      <div className="GroundGlassFilter" tabIndex={1}>
        {[1, 2, 3].map(() => {
          return getpic();
        })}
      </div>
    </div>
  );
};

export default GroudGlass;
