import React from "react";

function UseCallbackChild(props) {
  console.log("UseCallback Child component");
  console.log(props.func());
  return <></>;
}

// # because of wrapping with [React.memo] HOC, we can stop un-necessary rendering of components with same props and states
export default React.memo(UseCallbackChild);
