import './App.less';
import {useEffect} from 'react';
import ButtonTest from './UIcomponent/Button/ButtonTest';

function App() {
  useEffect(() => {
    return () => {};
  });

  return (
    <div className="App">
      <ButtonTest />
    </div>
  );
}

export default App;
