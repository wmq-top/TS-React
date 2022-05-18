import React from 'react';
import FlipCard from './FlipCard';
import DazzleButton from '../Button/DazzleButton';
import LightFlowButton from '../Button/LightFlowBtn';

const FlipCardDemo: React.FC = () => {
  const getFront = () => {
    return (
      <div style={{height: 200}}>
        <div>11111111111</div>
      </div>
    );
  };
  const getBack = () => {
    return (
      <div style={{height: 200}}>
        <div>
          <DazzleButton id="mys" />
          <LightFlowButton
            id="lightFlow-btn"
            text="lightFlow"
            lightColor={'pink'}
            speed={0.5}
            style={{height: '46px'}}
          />
        </div>
      </div>
    );
  };
  const content = new Array(8).fill(0).map(() => {
    return {
      front: getFront(),
      back: getBack(),
    };
  });
  return (
    <FlipCard
      content={content}
      style={{width: '1080px'}}
      cardHeight={300}
      rolNums={4}
    />
  );
};

export default FlipCardDemo;
