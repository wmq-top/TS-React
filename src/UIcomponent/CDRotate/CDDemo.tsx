import CDRotate from './CDRotate';

const CDRotateDemo = () => {
  return (
    <div>
      <CDRotate
        size="200px"
        speed={120}
        image="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic73.nipic.com%2Ffile%2F20150723%2F9583477_231939125000_2.jpg&refer=http%3A%2F%2Fpic73.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655058788&t=4cf21622bb070cdc5d3665d4e9f0fe9d"
        withControl={true}
        controlStyle={{marginTop: 100}}
      />
    </div>
  );
};

export default CDRotateDemo;
