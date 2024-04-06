import React from "react";
import "../App.css";

export default function SendDataChildToParentComponent() {
  const stdAlert = (data) => {
    return console.log(`parent component ${data}`);
  };

  return (
    <div className="App">
      <h1>Send Data Child To Parent Component (lifting state up)</h1>

      {/* passing function as an props to child component (called lifting state up) */}
      <Child stdNameAlert={stdAlert} />
    </div>
  );
}

function Child(props) {
  const stdName = "bilal javed";

  return (
    <>
      <h1>Child Component</h1>
      <button onClick={() => props.stdNameAlert(stdName)}>click</button>
    </>
  );
}

/**
 * passing data from child to parent in react (called as lifting state up)
 */
