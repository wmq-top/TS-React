import React, {useEffect} from 'react';
import './index.less';
interface contentProps {
  front: React.ReactNode;
  back: React.ReactNode;
}
interface FlipCardProps {
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
  content?: contentProps[];
  cardHeight?: number;
  rolNums?: 1 | 2 | 3 | 4 | 5;
}
const FlipCard: React.FC<FlipCardProps> = (props: FlipCardProps) => {
  const {className, style, speed, content, rolNums, cardHeight} = props;
  const [row, setRow] = React.useState(3);
  return (
    <div className={`flipCardContent ${className || ''}`} style={style}>
      {content &&
        content.map((item, index) => {
          return (
            <div
              className="flipCardItem"
              key={index}
              data-row={rolNums || row}
              style={{
                height: `${cardHeight || 400}px`,
              }}
            >
              <div
                className="flipCardItemFront"
                style={{transition: `all ease-in-out ${speed || 0.8}s`}}
              >
                {item.front}
              </div>
              <div
                className="flipCardItemBack"
                style={{transition: `all ease-in-out ${speed || 0.8}s`}}
              >
                {item.back}
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default FlipCard;
