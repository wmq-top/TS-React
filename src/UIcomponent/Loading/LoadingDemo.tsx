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
        strenth={5}
        style={{height: '2px', width: '800px'}}
      />
      <Loading
        shape="circle"
        color="skyblue"
        contentColor="skyblue"
        speed={1.5}
        style={{height: '100px'}}
        cyclesize={40}
        strenth={2}
      />

      <Loading
        color="skyblue"
        contentColor="skyblue"
        speed={1.5}
        style={{height: '100px'}}
        cyclesize={200}
        strenth={8}
      />
    </div>
  );
};

export default LoadingDemo;
