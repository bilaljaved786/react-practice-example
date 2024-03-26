import React, { useState } from "react";
import "../App.css";

export default function GetInputboxvalue() {
  const [data, setData] = useState();
  const [print, setPrint] = useState(false);

  function updateValue(event) {
    setData(event.target.value);
    setPrint(false);
  }

  const printData = () => {
    setPrint(true);
  };

  return (
    <div className="App">
      <h1>Get Input boxv alue</h1>
      {print ? <p>on click event {data}</p> : null}
      <p>on change event {data}</p>
      <input type="text" onChange={updateValue}></input> &nbsp;
      <button onClick={printData}>print data</button>
    </div>
  );
}

/**
 * can we send html as props ?
 * yes we can send html in props using [this.props.children] in class components
 * in Function Components using [this.children]
 */
