import React, { useState, useEffect } from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from "axios";
import AdminSideNav from "./AdminSideNav";

import "../admin.css";

export default function AdminAddMember() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [contactNo, setcontactNo] = useState("");
  const [userImage, setuserImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS426qAwHYRjMvgrLWcp9sDlX9BgTld_2c4sg&usqp=CAU"
  );
  const [processStatus, setprocessStatus] = useState(false);
  const [processAlert, setprocessAlert] = useState("");
  const [processMessage, setprocessMessage] = useState("");

  useEffect(() => {
    if (
      !localStorage.getItem("x-auth-token") &&
      localStorage.getItem("role") !== "Admin"
    ) {
      window.location = "/";
    }
  }, []);

  function AddMember(e) {
    e.preventDefault();
    setprocessStatus(true);
    setprocessAlert("alert alert-warning");
    setprocessMessage("Please Wait");

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    const newMember = {
      userName,
      password,
      fullName,
      email,
      contactNo,
      userImage,
    };

    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/api/member",
        newMember,
        config
      )
      .then(() => {
        NotificationManager.success('Member account created successfully');
        setprocessAlert("alert alert-success");
        setprocessMessage("Member account created successfully");
        window.location = "/admin";
      })
      .catch((err) => {
        NotificationManager.error("Something Went wrong. Please try again");
        setprocessAlert("alert alert-danger");
        setprocessMessage("Something Went wrong. Please try again");
      });
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-12 admindashboard">
          <AdminSideNav />
        </div>

        <div className="col-lg-8 col-md-8 col-sm-12 admindashboard">
          <h3 className="text-center">ADD MEMBER</h3>
          <form onSubmit={AddMember}>
            <div class="form-group">
              <label>Username</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Username"
                required
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>Fullname</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter FullName"
                required
                onChange={(e) => {
                  setfullName(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>ContactNo</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Contact Number"
                required
                onChange={(e) => {
                  setcontactNo(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              {processStatus ? (
                <div class={processAlert} role="alert">
                  {processMessage}
                </div>
              ) : (
                ""
              )}{" "}
            </div>
            <button type="submit" class="btn btn-primary">
              ADD
            </button>
          </form>
        </div>
      </div>
      <NotificationContainer/>
    </div>
  );
}
