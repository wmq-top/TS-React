import React from 'react';
import PageTurn from './PageTurn';
const PageTurnDemo: React.FC = () => {
  return (
    <div>
      <PageTurn
        total={100}
        widthControl={true}
        size="small"
        pageSize={1}
        overHidden={100}
      />
      <PageTurn total={10} widthControl={true} />
      <PageTurn total={10} widthControl={true} size="large" />
    </div>
  );
};

export default PageTurnDemo;
