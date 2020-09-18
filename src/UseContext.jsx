import React, {useState,createContext,useContext} from 'react';

const countContext = createContext();

function Counter(){
  //  使得父传子更简单
  const obj = useContext(countContext);
  return (<h3>{obj.name} --- {obj.count}</h3>);
}

function UseContext() {
  const [name] = useState("tadm");
  const [count,setCount] = useState(0);

  return <div>
    <p>This is UseContext by {name}</p>
    <p>You clicked {count} times</p>
    <button onClick={()=>{setCount(count+1)}}>click me</button>

    <countContext.Provider value={{name,count}}>
      <Counter/>
    </countContext.Provider>
  </div>
}

export default UseContext;