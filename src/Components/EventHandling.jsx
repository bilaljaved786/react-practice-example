import React from "react";
import "../App.css";

function EventHandling() {
  let data = "bilal";

  function Apple() {
    /**
     * This data variable is not change in the h1 tag after button click
     * because component didnot understand that needs to be re-render
     * for that we need use states so that conponent re-render itself
     */

    data = "javed";
    alert("the data " + data);
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      {/* <button onClick={Apple}>click me</button> */}
      <button onClick={() => Apple()}>click me</button>
    </div>
  );
}

export default EventHandling;

/**
 * recommended use function components
 * call function using a callback like this [onClick={() => Apple()}] or onClick = {Apple}
 */
