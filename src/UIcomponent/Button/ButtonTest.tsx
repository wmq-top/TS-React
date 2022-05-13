import React from 'react';
import Button from './Button';

interface BtnProps {
  text?: string;
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'cancel' | 'link';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  block?: boolean;
  shape?: 'default' | 'circle' | 'round';
  ghost?: boolean;
  size?: string;
}

const ButtonTest: React.FC = () => {
  const defaultConfig: Array<BtnProps> = [
    {
      text: '确定',
      type: 'primary',
      onClick: e => {
        console.log(e);
      },
    },
    {
      text: '危险',
      type: 'danger',
    },
    {
      text: '警告',
      type: 'warning',
    },
    {
      text: '取消',
      type: 'cancel',
    },
    {
      text: '成功',
      type: 'success',
    },
    {
      text: '链接',
      type: 'link',
    },
  ];
  const GhostConfig: Array<BtnProps> = defaultConfig.map(item => {
    return {...item, ghost: true};
  });

  return (
    <div>
      <div style={{marginTop: 10}}>
        {defaultConfig.map((item, index) => {
          return <Button {...item} key={index} />;
        })}
      </div>
      <div style={{marginTop: 10}}>
        {GhostConfig.map((item, index) => {
          return <Button {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ButtonTest;
