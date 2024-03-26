import React from "react";
import "../App.css";

export default function PassFunctionAsProps() {
  function GetData() {
    alert("hello bilal");
  }

  return (
    <div className="App">
      Pass Function As Props
      <Child data={GetData} />
    </div>
  );
}

function Child(props) {
  return (
    <div>
      <h1>Child component</h1>
      <button onClick={() => props.data()}>click</button>
    </div>
  );
}

/**
 * we can pass function as props to child component
 * if we have multiple child components in that way we can pass from the parant component to other components
 */
