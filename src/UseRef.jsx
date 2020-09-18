import React, {useState, useEffect, useMemo, useRef} from 'react';

function UseRef(props) {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    return 2 * count;
  }, [count]);

  const counterRef = useRef();

  useEffect(() => {
    // 获取 DOM 对象
    // console.log(counterRef.current);
    // 获取上一次状态值
    counterRef.current = count;
  }, [count]);

  return (
      <>
        <div>上一次的值：{counterRef.current}</div>
        <button ref={counterRef} onClick={() => {
          setCount(count + 1)
        }}>Count: {count}, double: {doubleCount}</button>
      </>
  );
}

export default UseRef;