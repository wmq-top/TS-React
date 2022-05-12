import './App.less';
import {useEffect} from 'react';
import Button from './UIcomponent/Button/Button';

function App() {
  useEffect(() => {
    return () => {};
  });

  return (
    <div className="App">
      <Button type="primary" text="确认" disabled />
      <Button type="danger" text="危险" block />
      <Button type="warning" text="警告" />
      <Button type="cancel" text="取消" />
      <Button type="link" text="链接" />
      <Button type="success" text="提交" />

      <div className="testbox"></div>
      <div className="testbox2"></div>
      <div className="testbox3"></div>
    </div>
  );
}

export default App;
