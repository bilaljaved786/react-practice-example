import React, { useState } from "react";
import "../App.css";
import Child from "./Child";

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {console.log("parent component rendered")}

      <h1>React Memo</h1>
      <h2>Count is : {count}</h2>
      <Child count={count} />
      <button onClick={() => setCount(1)}>Click</button>
    </div>
  );
};

export default ReactMemo;

/**
 * React.memo is a wrapper component
 * Alternate of pure component
 * React.memo is a high order component, that take a component as an argument and return a component
 * we use React.memo when we want to stop un-necessary rendering of components with same props and states
 * 
 */
