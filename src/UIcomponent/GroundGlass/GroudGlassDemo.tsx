import React from 'react';
import GroudGlass from './GroundGlass';

const GroundGlassDemo: React.FC = () => {
  return (
    <GroudGlass
      style={{
        backgroundImage: `url(
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-11-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655475728&t=56dae41d9bf572e4fa00a26ed42d7594'
        )`,
        backgroundSize: 'cover',
      }}
    />
  );
};

export default GroundGlassDemo;
