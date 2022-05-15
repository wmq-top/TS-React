import './App.less';
import {useEffect} from 'react';
import ButtonTest from './UIcomponent/Button/ButtonDemo';
import CDRotateDemo from './UIcomponent/CDRotate/CDDemo';
import LoadingDemo from './UIcomponent/Loading/LoadingDemo';
import PageTurnDemo from './UIcomponent/PageTurn/PageTurnDemo';

function App() {
  useEffect(() => {
    return () => {};
  });

  return (
    <div className="App">
      {/* <ButtonTest /> */}
      {/* <LoadingDemo /> */}
      {/* <CDRotateDemo /> */}
      <PageTurnDemo />
    </div>
  );
}

export default App;
