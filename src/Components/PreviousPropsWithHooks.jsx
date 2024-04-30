import React, { useEffect, useRef, useState } from "react";
import "../App.css";

function PreviousPropsWithHooks() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Previous Props With Hooks</h1>
      <Child data={count} />
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

function Child(props) {
  // # we use [useRef hook] to directly manipulate the DOM
  const lastValue = useRef();

  useEffect(() => {
    lastValue.current = props.data;

    // # Inside the useEffect hook, we don't get the previous value in [lastValue.current]
    console.log(
      "try accessing the previous value inside the useEffect hook",
      lastValue.current
    );
  });

  // # Try accessing the previous value, outside of the useEffect hook
  const previousValue = lastValue.current;
  console.log(
    "try accessing the previous value outside the useEffect hook",
    previousValue
  );

  return (
    <>
      <h2>previous props : {previousValue}</h2>
      <h2>current props : {props.data}</h2>
    </>
  );
}

export default PreviousPropsWithHooks;
