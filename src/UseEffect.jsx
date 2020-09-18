import React, {useState,useEffect} from 'react';

function UseEffect() {
  const [name] = useState("tadm");
  const [count,setCount] = useState(0);

  //  替代生命周期函数：componentDidMount componentDidUpdate componentWillUnmount
  //  注意：此方法为异步函数
  useEffect(()=>{
    console.log(`useEffect=>You clicked ${count} times`)
    // const id = setInterval(() => {
    //   setCount(count + 1);
    // }, 1000);
    return ()=>{
      console.log("unmount");
      //  组件卸载前需要清掉定时器
      // clearInterval(id);
    }
    //  传空数组[]时，就是当组件将被销毁时才进行解绑
    //  每次 count 发生变化，我们都进行解绑
  },[count]);

  return <div>
    <p>This is useEffect by {name}</p>
    <p>You clicked {count} times</p>
    <button onClick={()=>{setCount(count+1)}}>click me</button>
  </div>
}

export default UseEffect;