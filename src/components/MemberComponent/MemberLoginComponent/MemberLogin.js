import React, { useState } from "react";
import axios from "axios";

import "./MemberLogin.css";

export default function MemberLogin() {
  const [userName, setuserName] = useState(null);
  const [password, setpassword] = useState(null);
  const [loginStatus, setloginStatus] = useState(null);
  const [loginStatusColor, setloginStatusColor] = useState(null);

  function LoginFunction(e) {
    setloginStatusColor("alert-success");
    setloginStatus("Please Wait....");
    e.preventDefault();

    const user = {
      userName,
      password,
    };

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/auth/login", user)
      .then((res) => {
        setloginStatusColor("alert-success");
        setloginStatus("Login Successful");
        localStorage.setItem("x-auth-token", res.data.token);
        localStorage.setItem("role", "Member");
        window.location = "/member";
      })
      .catch((err) => {
        setloginStatusColor("alert-danger");
        setloginStatus("Invalid Username or Password");
      });
  }

  return (
    <div className="MainLoginComponent">
      <div className="SubLoginComponent">
        <div className="loginForm mt-10">
          <form onSubmit={LoginFunction}>
            <div>
              <h1>GEMSOC | LOGIN</h1>
              <hr className="HrBreakerLogin" />
            </div>
            {loginStatus ? (
              <div class="form-group">
                <div class={"alert " + loginStatusColor} role="alert">
                  {loginStatus}
                </div>
              </div>
            ) : (
              ""
            )}

            <div class="form-group">
              <label>USERNAME</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Username"
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
                required
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
