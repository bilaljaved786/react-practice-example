import React, { useState } from "react";
import "../App.css";

export default function Propswithfunctionalcomponent() {
  let [data, setDate] = useState({ id: 100, name: "bilal", age: 25 });
  console.log(data);
  return (
    <div className="App">
      Propswithfunctionalcomponent
      <Student std={data}></Student>
      
      {/* important part */}
      <button onClick={() => setDate({ ...data, name: "javed", age: 30 })}>
        click me
      </button>
    </div>
  );
}

function Student(props) {
  return (
    <div>
      <p>student id: {props.std.id}</p>
      <p>student name: {props.std.name}</p>
      <p>student age: {props.std.age}</p>
    </div>
  );
}

/**
 * passing props using functional components
 * copying the previous state and updating some of the properties og the object like that 
 * setDate({ ...data, name: "javed", age: 30 })
 */
