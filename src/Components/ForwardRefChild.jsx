import React, { forwardRef } from "react";

function ForwardRefChild(props, reference) {
  return <input type="text" placeholder="enter your name" ref={reference} />;
}

// # using the forwardRef property, while receiving the [ref] from parent
export default forwardRef(ForwardRefChild);
