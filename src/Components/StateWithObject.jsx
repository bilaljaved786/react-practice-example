import React, { useState } from "react";
import "../App.css";

export default function StateWithObject() {
  const [data, setData] = useState({ name: "bilal", cms: 15258, age: 25 });

  // # Example using the Array
  //const [data, setData] = useState([{ name: "bilal", cms: 15258, age: 25 } ]);

  return (
    <div className="App">
      <h1>State With Object</h1>
      <h4>Student Name : {data.name}</h4>
      <h4>Student Cms : {data.cms}</h4>
      <h4>Student Age : {data.age}</h4>

      <button onClick={() => setData({ ...data, name: "javed" })}>click</button>

      {/* Example using the array */}
      {/* <button onClick={() => setData([...data, { name: "javed", cms: 12345, age: 30 }])}> */}
    </div>
  );
}
