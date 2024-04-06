import React, { useMemo, useState } from "react";
import "../App.css";

export default function useMemoPerfectExample() {
  // define states
  const [count, setCount] = useState(0);
  const [Age, setAge] = useState(0);

  // define useMemo hook and run only on Age state variable changes
  const partiallyUpdate = useMemo(() => {
    return (
      <>
        {console.log("inside the use Memo")}
        <h1 style={{ color: "red" }}>Count inside the use Memo: {count}</h1>
      </>
    );
  }, [Age]);

  return (
    <div className="App">
      <h1>use-Memo Perfect Example</h1>
      {partiallyUpdate}
      <h1>count outside the use Memo : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click on count</button> <br />
      <button onClick={() => setAge(Age + 1)}>Click on Age</button>
    </div>
  );
}

/**
 *                  Difference between useMemo and useEffect
 *
 * we have the return statement inside the useMemo, but not in useEffect
 * we can return the JSX from the useMemo hook, but not from useEffect
 * useEffect either render or not render the whole component,but useMemo render partially the component
 * we use useEffect for server side network call, data fetching from the server
 * we use useMemo for saving expensive function calls (like expensive calculation)
 */
