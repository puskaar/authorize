import React, { useState } from "react";

import "./login.css";

export default function Login(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [iscalling, setiscalling] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setiscalling(true);
    fetch(`https://api.framework.pegotec.pro/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        setiscalling(false);
        if (data.status_code === 200) {
          props.setToken(data.msg);
        } else {
          alert("Unable to login");
        }
      })
      .catch((err) => {
        setiscalling(false);
        alert("Cannot login!");
        console.log(err);
      });
  };
  if (iscalling) {
    setiscalling(false);
    return alert("...is loading");
  }
  return (
    <div className="login-wrapper">
      <div className="login-form">
        <h1> Login</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
          </label>
          <br></br>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <hr></hr>
          <div>
            <button onClick={handleSubmit} className="button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
