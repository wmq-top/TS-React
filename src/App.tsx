import './App.less';
import {useEffect} from 'react';
import ButtonTest from './UIcomponent/Button/ButtonTest';
import CDRotateDemo from './UIcomponent/CDRotate/CDDemo';

function App() {
  useEffect(() => {
    return () => {};
  });

  return (
    <div className="App">
      {/* <ButtonTest /> */}
      <CDRotateDemo />
    </div>
  );
}

export default App;
