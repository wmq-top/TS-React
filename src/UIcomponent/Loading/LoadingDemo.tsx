import React from 'react';
import Loading from './Loading';

const LoadingDemo: React.FC = () => {
  return (
    <div>
      <Loading
        shape="line"
        color="skyblue"
        contentColor="white"
        speed={1.5}
        style={{height: '2px', width: '800px'}}
      />
    </div>
  );
};

export default LoadingDemo;
