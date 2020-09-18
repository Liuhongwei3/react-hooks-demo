import React, {memo,useEffect, useLayoutEffect, useState} from 'react';

function UseLayoutEffect(props) {
  const [count, setCount] = useState(1);

  useLayoutEffect(()=>{
    console.log("dosth")
    if(count === 0){
      setCount(Math.random() * 100)
    }
  },[count]);

  return (
      <div>
        <h2>当前数字：{count}</h2>
        <button onClick={e => setCount(0)}>click</button>
      </div>
  );
}

export default UseLayoutEffect;