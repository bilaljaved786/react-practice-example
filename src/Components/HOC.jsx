import React, { useState } from "react";
import "../App.css";

export default function HOC() {
  return (
    <div style={{ marginBottom: "200px" }}>
      <h1 style={{ marginLeft: "200px", textAlign: "center" }}>
        High order component Example
      </h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}

// # Red HOC container
function HOCRed(props) {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: "100x",
        width: "100px",
        marginLeft: "500px",
        textAlign: "center",
      }}
    >
      <props.cmp />
    </div>
  );
}

// # Green HOC container
function HOCGreen(props) {
  return (
    <div
      style={{
        backgroundColor: "green",
        height: "100x",
        width: "100px",
        marginLeft: "500px",
        textAlign: "center",
      }}
    >
      <props.cmp />
    </div>
  );
}

// # Blue HOC container
function HOCBlue(props) {
  return (
    <div
      style={{
        backgroundColor: "blue",
        height: "100x",
        width: "100px",
        marginLeft: "500px",
        textAlign: "center",
      }}
    >
      <props.cmp />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
}

/**
 * HOC or Higher Order Component that can be used as a wrapper for any component
 * HOC component that takes a component as a parameter and return a component as well
 * */
