import React, { useState } from "react";
import "../App.css";

export default function RenderMethod() {
  const [name, setName] = useState("bilal");

  return (
    <div className="App" style={{ paddingTop: "50px" }}>
      RenderMethod
      {console.log("at first time render method runs")}
      <Child studentName={name}></Child> <br />
      <button onClick={() => setName("javed")}>click</button>
    </div>
  );
}

function Child(props) {
  return <div>Student Name is {props.studentName}</div>;
}

/**
 * method run for the first time when component is rendered
 * when state or props is changed
 * when parent component re-renders itself
 */
