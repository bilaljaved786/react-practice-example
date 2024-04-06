import React, { useRef } from "react";
import ForwardRefChild from "./ForwardRefChild";
import "../App.css";

export default function ForwardRef() {
  // define the inputRef with default value (null)
  let inputRef = useRef(null);

  // function to call when click on the button
  const GetInputRefValue = () =>
    (inputRef.current.value = "bilal javed mughal");

  return (
    <div className="App">
      <h1>Forward Ref Example</h1>
      {/* passing the inputRef as an props to child component */}
      {/* argument name must be [ref] not other then that, while passing the ref*/}
      <ForwardRefChild ref={inputRef} /> <br />
      <br />
      <button onClick={() => GetInputRefValue()}>click me</button>
    </div>
  );
}

/**
 *
 */
