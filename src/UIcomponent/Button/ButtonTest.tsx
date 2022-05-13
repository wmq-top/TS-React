import React from 'react';
import Button from './Button';

interface BtnProps {
  text?: string;
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'cancel' | 'link';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  block?: boolean;
  shape?: 'default' | 'fillet' | 'round';
  ghost?: boolean;
  size?: 'minimum' | 'small' | 'default' | 'large';
}

const ButtonTest: React.FC = () => {
  const defaultConfig: Array<BtnProps> = [
    {
      text: '确定',
      type: 'primary',
      shape: 'fillet',
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
  const DisabledConfig: Array<BtnProps> = defaultConfig.map(item => {
    return {...item, disabled: true};
  });
  const SmallSizeConfig: Array<BtnProps> = defaultConfig.map(item => {
    if (item.text === '确定') {
      return {
        ...item,
        shape: 'fillet',
        size: 'large',
      };
    }
    return {...item, size: 'small'};
  });
  const LargeSizeConfig: Array<BtnProps> = defaultConfig.map(item => {
    if (item.text === '确定') {
      return {
        ...item,
        shape: 'fillet',
        size: 'large',
      };
    }
    return {...item, size: 'large'};
  });
  const MiniumSizeConfig: Array<BtnProps> = defaultConfig.map(item => {
    if (item.text === '确定') {
      return {
        ...item,
        shape: 'fillet',
        size: 'minimum',
      };
    }
    return {...item, size: 'minimum'};
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
      <div style={{marginTop: 10}}>
        {DisabledConfig.map((item, index) => {
          return <Button {...item} key={index} />;
        })}
      </div>
      <div style={{marginTop: 10}}>
        {SmallSizeConfig.map((item, index) => {
          return <Button {...item} key={index} />;
        })}
      </div>
      <div style={{marginTop: 10}}>
        {LargeSizeConfig.map((item, index) => {
          return <Button {...item} key={index} />;
        })}
      </div>
      <div style={{marginTop: 10}}>
        {MiniumSizeConfig.map((item, index) => {
          return <Button {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ButtonTest;
