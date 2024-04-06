import React, { useEffect, useRef } from "react";
import "../App.css";

export default function UseRefHook() {
  const inputref = useRef(null);

  // behave as like ComponentDidMount in class component
  // Run when the component rendered
  useEffect(() => {
    inputref.current.value = "bilal javeed mughal";
  }, []);

  function GetInoutData() {
    console.log("the input value is ", inputref.current.value);
  }

  return (
    <div className="App">
      <h1>useRefHook</h1>
      <input type="text" placeholder="enter your name" ref={inputref} />
      <br />
      <br />
      <button onClick={GetInoutData}>get data</button>
    </div>
  );
}

/**
 * React recommended not to use useRefHook() because it slow down's the react itself (always first try to manipulate the DOM using states and props)
 * It is the same in javascript [document.getElementById()] to directly access the DOM element
 * useRefHook() to disrectly manipulate the DOM
 */
