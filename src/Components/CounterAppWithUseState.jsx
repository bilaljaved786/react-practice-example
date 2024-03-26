import React from "react";
import { useState } from "react";
import "../App.css";

export default function CounterAppWithUseState() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      Counter App With UseState
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

/**
 * Counter Application using react.js
 * the state is not accessible from outside the component.
 * State is private to component.
 */
