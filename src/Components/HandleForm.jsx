import React, { useState } from "react";
import "../App.css";

export default function HandleForm() {
  const [input, setInput] = useState();
  const [option, setOption] = useState();
  const [checkboxvalue, setcheckBoxValue] = useState();

  const formData = { input, option, checkboxvalue };
  const HandleSubmit = (e) => e.preventDefault();

  return (
    <div className="App">
      <h1>Handle Form</h1>
      <form onSubmit={HandleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)}></input>{" "}
        <br />
        <select onChange={(e) => setOption(e.target.value)}>
          <option>Ferari</option>
          <option>BMW</option>
          <option>Tesla</option>
        </select>
        <br />
        <input
          type="checkbox"
          onChange={(e) => setcheckBoxValue(e.target.checked)}
        ></input>
        <br />
        <button type="submit">submit</button>
      </form>
      <GetFormData data={formData} />
    </div>
  );
}

function GetFormData(props) {
  return (
    <div>
      <p>Name is :{props.data.input}</p>
      <p>Option : {props.data.option}</p>
      <p>
        {props.data.checkboxvalue ? (
          <span>Agreed</span>
        ) : (
          <span>Not Agreed</span>
        )}
      </p>
    </div>
  );
}

/**
 * Handling Form submit
 * using useStates react hook to manage states
 */
