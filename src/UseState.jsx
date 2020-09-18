import React, {useState} from 'react';

//  简化代码
function UseState() {
  const [name] = useState("tadm");
  const [count,setCount] = useState(0);

  return <div>
    <p>This is useState by {name}</p>
    <p>You clicked {count} times</p>
    <button onClick={()=>{setCount(count+1)}}>click me</button>
  </div>
}
export default UseState;