import React, { useState } from "react";
import "../App.css";

function Statewithfunctionalcomponent() {
  // use of usestate react hook
  const [data, setData] = useState("bilal");

  function updateData() {
    setData("javed");
  }

  return (
    <div className="App">
      State with functional component
      <h1>{data}</h1>
      <button onClick={updateData}>Click me!</button>
    </div>
  );
}

export default Statewithfunctionalcomponent;

/**
 * React re-render the component when states and props changes
 */
