import React, { useMemo, useState } from "react";
import "../App.css";

export default function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);

  // # This function also runs, when we update the age state (that is we don't want, to handle this we use useMemo hook)

  // function callWhenCountUpdate() {
  //   console.log("Call when count state update");
  //   return count * 10;
  // }

  const RunWhenCountStateUpdate = useMemo(
    function callWhenCountUpdate() {
      console.log("Call when count state update");
      return count * 10;
    },
    [count]
  );

  return (
    <div className="App">
      <h1>UseMemoHook</h1>
      <h2>Count :{count}</h2>
      <h2>Age :{age}</h2>
      {/* <h2>Call when Count UPdate :{callWhenCountUpdate()}</h2> */}
      <h2>Call when Count UPdate :{RunWhenCountStateUpdate}</h2>
      <button onClick={() => setCount(count + 1)}>update count</button> &nbsp;
      <button onClick={() => setAge(age + 1)}>update age</button>
    </div>
  );
}

/**
 * useMemo is used to optimize the performance of a component
 * we can stop un-wanted funciton calls using [use-memo hook] inside the functional component
 * we can stop specific protion of component to render using use-memo hook (very important point)
 * we can stop specific portion of component to re-render with use-memo but not with useEffect hook
 * useEffect is a life cycle method where as useMemo is a hook to optimize the component performance
 * useMemo can return the result where as useEffect cannot return the result
 */
