import React, { useState } from "react";
import "../App.css";

export default function HideShowAndToggle() {
  const [status, setStatus] = useState();
  return (
    <div className="App">
      <h1>Hide Show And Toggle</h1>
      <p>{status ? <span>bilal</span> : null}</p>
      <button onClick={() => setStatus(!status)}>Hide and Show</button>
    </div>
  );
}

/**
 * Hide and Show Application
 */
