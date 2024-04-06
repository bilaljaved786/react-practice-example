import React, { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";
import "../App.css";

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  // # This function runs everytime when the component re-renders because of state variable changes
  // # so wrap this function inside the usecallback hooks
  // # when the component re-renders because of state variable change,so the component re-create functions and thats why child component re-renders again, to stop this we need to use [useCallback hook]

  
  // # we are passing Hello function as a prop to child component (UseCallbackChild), but even after wrapping Child component with React.memo hook, Child component still re-renders to stop this un-necessary re-rendering we need to use useCallBack hook
//   function Hello() {
//     console.log("Hello function parent component");
//   }

  // # using useCallback hook and wrap the Hello function inside to stop un-necessary re-rendering
    const Hello = useCallback(
      function Hello() {
        console.log("Hello function parent component",age);
      },
      [age]
    );

  return (
    <div className="App">
      <h1>UseCallback Example</h1>
      <br />
      <br />
      <br />
      <h1>count : {count}</h1>
      <UseCallbackChild func={Hello} />
      <button onClick={() => setCount(count + 1)}>click count</button> &nbsp;
      <button onClick={() => setAge(age + 1)}>click age</button>
    </div>
  );
}

/**
 * useMemo returns a memoized value
 * useCallback returns a memoized function
 */
