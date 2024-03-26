import React, { useState } from "react";
import "../App.css";

export default function BasicFormValidation() {
  return (
    <div className="App">
      Basic Form Validation
      <Login />
    </div>
  );
}

function Login() {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [errPass, setErrPass] = useState(false);

  function HandleSubmit(e) {
    e.preventDefault();
    console.log({ user, pass });

    if (pass.length < 3) {
      setErrPass(true);
    } else {
      alert("user login successfully");
    }
  }

  const HandleUserChange = (e) => {
    setUser(e.target.value);
  };

  const HandlePassChange = (e) => {
    setPass(e.target.value);
    setErrPass(false);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <form onSubmit={HandleSubmit}>
        <input type="text" placeholder="username" onChange={HandleUserChange} />
        <br />
        <input type="text" placeholder="password" onChange={HandlePassChange} />
        <h3>
          {errPass ? <span>password is wrong</span> : <span>{null}</span>}
        </h3>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
