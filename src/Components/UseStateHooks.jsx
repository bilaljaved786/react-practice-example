import React, { useState } from "react";
import "../App.css";

export default function UseStateHooks() {
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <h1>Use State Hooks</h1>
      <h2>Count is : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>

      {/* get prev value and update 1 into it */}
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Click</button> */}
    </div>
  );
}

/**
 * Demonstration of useState hook
 */
