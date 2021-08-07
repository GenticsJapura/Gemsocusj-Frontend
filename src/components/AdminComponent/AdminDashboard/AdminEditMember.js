import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminSideNav from "./AdminSideNav";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import "../admin.css";

export default function AdminEditMember(props) {
  const [userID, setuserID] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState(null);
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

    if (!props.location.data) {
      window.location = "/admin";
    }

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/api/member/" +
          props.location.data,
        config
      )
      .then((res) => {
        setuserID(props.location.data);
        setuserName(res.data.userName);
        setfullName(res.data.fullName);
        setemail(res.data.email);
        setcontactNo(res.data.contactNo);
        setuserImage(res.data.userImage);
      })
      .catch((err) => {
        alert("Something went wrong");
        window.location = "/admin";
      });
  }, []);

  function EditMember(e) {
    e.preventDefault();

    setprocessStatus(true);
    setprocessAlert("alert alert-warning");
    setprocessMessage("Please Wait");

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    if (!password) {
      const newMember = {
        userName,
        fullName,
        email,
        contactNo,
        userImage,
      };

      axios
        .put(
          process.env.REACT_APP_BACKEND_URL + "/api/member/" + userID,
          newMember,
          config
        )
        .then(() => {
          setprocessAlert("alert alert-success");
          setprocessMessage("Member account updated successfully");
          window.location = "/admin";
        })
        .catch((err) => {
          setprocessAlert("alert alert-danger");
          setprocessMessage("Something Went wrong. Please try again");
        });
    } else {
      const newMember = {
        userName,
        password,
        fullName,
        email,
        contactNo,
        userImage,
      };

      axios
        .put(
          process.env.REACT_APP_BACKEND_URL + "/api/member/" + userID,
          newMember,
          config
        )
        .then(() => {
          NotificationManager.success("","Member Updated");
          window.location = "/admin";
        })
        .catch((err) => {
          NotificationManager.error("","Something went wrong");
        });
    }
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-12 admindashboard">
          <AdminSideNav />
        </div>

        <div className="col-lg-8 col-md-8 col-sm-12 admindashboard">
          <h3 className="text-center">UPDATE MEMBER</h3>
          <form onSubmit={EditMember}>
            <div class="form-group">
              <label>Username</label>
              <input
                type="text"
                class="form-control"
                value={userName}
                required
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
                placeholder="Create New Password"
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
                value={fullName}
                required
                onChange={(e) => {
                  setfullName(e.target.value);
                }}
                required
              />
            </div>
            <div class="form-group">
              <label>Email address</label>
              <input
                type="email"
                class="form-control"
                value={email}
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
              />
            </div>
            <div class="form-group">
              <label>ContactNo</label>
              <input
                type="text"
                class="form-control"
                value={contactNo}
                required
                onChange={(e) => {
                  setcontactNo(e.target.value);
                }}
                required
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
              EDIT
            </button>
          </form>
        </div>
      </div>
      <NotificationContainer/>
    </div>
  );
}
