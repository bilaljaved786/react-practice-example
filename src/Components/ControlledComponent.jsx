import React, { useState } from "react";
import "../App.css";

export default function ControlledComponent() {
  const [name, setName] = useState();
  const HandleChange = (event) => setName(event.target.value);

  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <input
        type="text"
        placeholder="enter your name"
        onChange={HandleChange}
      />
      <h2>Name : {name} </h2>
    </div>
  );
}

/**
 * controlled component => when we control the input fields using states and props called controlled component
 * un-controlled component => when we donot control the input fields using states and props called un-controlled component
 * un-controlled component => handle using useref()
 * when we access the DOM element using useRef(), so we can directly manipulate the DOM (React doesnot recommended this approach)
 */
