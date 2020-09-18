import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Count from "./Count";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import UseReducer from "./UseReducer";
import UseCallback from "./UseCallback";
import UseRef from "./UseRef";
import UseLayoutEffect from "./UseLayoutEffect";

ReactDOM.render(<React.StrictMode>
      {/*<Count/>*/}
      {/*<UseState/>*/}
      {/*<UseEffect/>*/}
      {/*<UseContext/>*/}
      {/*<UseReducer/>*/}
      {/*<UseCallback/>*/}
      {/*<UseRef/>*/}
      <UseLayoutEffect/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();