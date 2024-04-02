import React, { useEffect, useState } from "react";
import "../App.css";

export default function UseEffectHook() {
  //   const [count, setCount] = useState(0);
  //   const [Age, setAge] = useState(10);
  const [status, setStatus] = useState(false);

  // ? call every time when the component re-renders
  // useEffect(() => {
  //     console.log("useEffect called");
  //   });

  // ? call only when the component mount once
  //   useEffect(() => {
  //       console.log("useEffect when Component Did Mount ");
  //     },[]);  // ! we can pass the props in the dependency array as well

  // ? call only when the count state changes (like componentDidMount)
  //   useEffect(() => {
  //     console.log("useEffect component Did Update");
  //   },[count]);

  return (
    <div className="App">
      <h1>Use Effect Hook</h1>

      {/* <h3>Count: {count}</h3> */}
      {/* <h3>Age: {Age}</h3> */}

      {/* <button onClick={() => {setCount(count  + 1);}}>Counter</button> &nbsp; */}
      {/* <button onClick={() => {setAge(Age  + 1);}}>Age</button> */}

      {status ? <Child /> : null}

      <button onClick={() => setStatus(!status)}>Toogle Component</button>
    </div>
  );
}

function Child() {
  useEffect(() => {
    console.log("useEffect componentDidMount"); // ! when component Mount
    return () => {
      console.log("useEffect componentWillUnmount"); // ! when component UnMount
    };
  });

  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
}

/**
 * All the functionality we perform with the [componentDidMount,componentDidUpdate,componentWillUnmount] in class component is done by useEffect hook in functional component
 * We can define multiple useEffect Hooks in one functional component
 */
