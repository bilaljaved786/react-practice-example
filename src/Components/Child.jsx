import React from "react";

function Child({ count }) {
  return <>{console.log("inside the child component", count)}</>;
}

export default React.memo(Child);

/**
 * React.memo prevents Child component to be re-rendered because there is no changes in props
 */
