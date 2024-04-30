import React, { useState } from "react";
import "../App.css";

function PreviousStateFunctionalComponent() {
  const [count, setCount] = useState(10);

  const updateState = () => {

    // # How to get the previous value
    // ! order is important here

    setCount((previousValue) => {
      console.log(`previousValue ${previousValue}`);
    });

    // # Set the new value in the state
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>PreviousStateFunctionalComponent</h1>
      <h3>count state value is : {count}</h3>
      <button onClick={() => updateState()}>Click to update state</button>
    </div>
  );
}

export default PreviousStateFunctionalComponent;
