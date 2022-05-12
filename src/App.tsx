import './App.less';
import {useEffect} from 'react';
import Button from './UIcomponent/Button/Button';

function App() {
  useEffect(() => {
    return () => {};
  });

  return (
    <div className="App">
      <Button props={{type: 'primary', text: '确认'}} />
      <Button props={{type: 'danger', text: '危险'}} />
      <Button props={{type: 'warning', text: '警告'}} />
      <Button props={{type: 'cancel', text: '取消'}} />
      <Button props={{type: 'link', text: '链接'}} />
      <Button props={{type: 'success', text: '提交'}} />

      <div className="testbox"></div>
      <div className="testbox2"></div>
      <div className="testbox3"></div>
    </div>
  );
}

export default App;
