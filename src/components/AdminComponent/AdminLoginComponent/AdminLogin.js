import React, { useState } from "react";
import axios from "axios";

import "./AdminLogin.css";

export default function AdminLogin() {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loginStatus, setloginStatus] = useState(null);
  const [loginStatusColor, setloginStatusColor] = useState(null);

  function LoginFunction(e) {
    setloginStatusColor("alert-success");
    setloginStatus("Please Wait....");
    e.preventDefault();

    const user = {
      email,
      password,
    };

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/admin/login", user)
      .then((res) => {
        setloginStatusColor("alert-success");
        setloginStatus("Login Successful");
        localStorage.setItem("x-auth-token", res.data.token);
        localStorage.setItem("role", "Admin");
        window.location = "/admin";
      })
      .catch((err) => {
        setloginStatusColor("alert-danger");
        setloginStatus("Invalid Email or Password");
      });
  }

  return (
    <div className="MainLoginComponent">
      <div className="SubLoginComponent">
        <div className="loginForm mt-10">
          <form onSubmit={LoginFunction}>
            <div>
              <h1>GEMSOC | ADMIN LOGIN</h1>
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
              <label>email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter Email"
                onChange={(e) => {
                  setemail(e.target.value);
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
            &nbsp;&nbsp;
            <a href="/forgotpassword">Forgot password</a>
          </form>
        </div>
      </div>
    </div>
  );
}
