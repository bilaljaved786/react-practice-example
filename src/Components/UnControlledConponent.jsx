import React, { useRef } from "react";
import "../App.css";

export default function UnControlledConponent() {
  // define useRef proeprty for input field
  const inputRef = useRef(null);

  //function to get the value of input field
  const GetInputValue = () => {
    console.log("the input value is", inputRef.current.value);
  };

  return (
    <div className="App">
      <h1>Un-Controlled Conponent</h1>
      <input
        type="text"
        ref={inputRef}
        placeholder="enter your name"
      /> <br /> <br />
      <button onClick={GetInputValue}>click</button>
    </div>
  );
}

/**
 * controlled component => when we control the input fields using states and props called controlled component
 * un-controlled component => when we donot control the input fields using states and props called un-controlled component
 * un-controlled component => handle using useref()
 * when we access the DOM element using useRef(), so we can directly manipulate the DOM (React doesnot recommended this approach)
 */
