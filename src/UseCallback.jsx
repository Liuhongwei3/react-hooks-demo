import React, {memo, useState, useCallback, useEffect} from 'react';

function UseCallback() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState('');

  const callback = useCallback(() => {
    console.log("do useCallback")
    return count;
  }, [count]);

  return <div>
    <h4> {count}</h4>
    <h4> {val}</h4>
    <Child callback={callback}/>
    <div>
      <button onClick={() => setCount(count + 1)}> +</button>
      <input value={val} onChange={event => setVal(event.target.value)}/>
    </div>
  </div>;
}

const Child = memo(({callback}) => {
  const [count, setCount] = useState(() => callback());

  useEffect(() => {
    setCount(callback());
  }, [callback]);

  return <div> {count}</div>
})

export default UseCallback;